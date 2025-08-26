import React, { useRef, useState } from 'react';
import * as S from './Item.style';
import editIcon from '../../../../assets/edit.svg';
import deleteIcon from '../../../../assets/delete.svg';
import basicBooth from '../../../../assets/basic_booth.png';
import { useNavigate } from 'react-router-dom';
import type { LostItemResponseItem } from '../../../../apis/lostItem/index.types';
import { useApiMutation } from '../../../../apis/config/builder/ApiBuilder';
import { deleteLostItem } from '../../../../apis/lostItem';
import { useToastContext } from '../../../../components/toast/Toast';
import { queryClient } from '../../../../QueryClient';

interface ItemProps {
  item: LostItemResponseItem;
  isAdmin?: boolean;
  openModal?: (lostItemId: number) => void;
}
const Item = ({ item, isAdmin, openModal }: ItemProps) => {
  const { show } = useToastContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const getRootFontSize = () => {
    if (typeof window !== 'undefined' && window.getComputedStyle) {
      const fs = window.getComputedStyle(document.documentElement).fontSize;
      const parsed = parseFloat(fs || '16');
      return Number.isNaN(parsed) ? 16 : parsed;
    }
    return 16;
  };

  const BUTTON_REM = 13.2963;
  const ROOT_FONT = getRootFontSize();
  const GAP_PX = 8;
  const MAX_OFFSET = (BUTTON_REM * ROOT_FONT + GAP_PX) * 2;

  const timeFormatter = (time: string) => {
    const date = new Date(time);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };

  const { mutate: deleteLostItemMutation } = useApiMutation(
    deleteLostItem(item.lostItemId),
    {
      onSuccess: () => {
        show('분실물 삭제 완료', 'info', true);
        queryClient.invalidateQueries({ queryKey: ['lostItems'] });
      },
      onError: () => {
        show('분실물 삭제 실패', 'error', true);
      },
    },
  );

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/lost-item/edit/${item.lostItemId}`);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isAdmin) return;
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isAdmin) return;

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 0) {
      const newOffset = Math.min(diff, MAX_OFFSET);
      setSlideOffset(newOffset);
    } else if (diff < 0 && slideOffset > 0) {
      const newOffset = Math.max(slideOffset + diff, 0);
      setSlideOffset(newOffset);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || !isAdmin) return;

    if (slideOffset > MAX_OFFSET / 2) {
      setSlideOffset(MAX_OFFSET);
    } else {
      setSlideOffset(0);
    }
    setIsDragging(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isAdmin) return;
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isAdmin) return;

    const diff = startX - e.clientX;

    if (diff > 0) {
      const newOffset = Math.min(diff, MAX_OFFSET);
      setSlideOffset(newOffset);
    } else if (diff < 0 && slideOffset > 0) {
      const newOffset = Math.max(slideOffset + diff, 0);
      setSlideOffset(newOffset);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || !isAdmin) return;
    if (slideOffset > MAX_OFFSET / 2) {
      setSlideOffset(MAX_OFFSET);
    } else {
      setSlideOffset(0);
    }
    setIsDragging(false);
  };

  return (
    <>
      <S.ItemWrapper>
        {isAdmin && (
          <S.ActionButtons isVisible={slideOffset > 0}>
            <S.DeleteButton onClick={() => deleteLostItemMutation()}>
              <S.DeleteIcon src={deleteIcon} alt="delete" />
            </S.DeleteButton>
            <S.EditButton onClick={handleEdit}>
              <S.EditIcon src={editIcon} alt="edit" />
            </S.EditButton>
          </S.ActionButtons>
        )}

        <S.Container
          style={{
            transform: `translateX(-${slideOffset}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}
          ref={containerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onClick={() => openModal && openModal(item.lostItemId)}
        >
          <S.ItemImage
            src={item.images?.[0]?.imageUrl || basicBooth}
            alt="Lost Item"
          />
          <S.ItemContent>
            <S.ItemTitleSection>
              <S.ItemTitle>{item.title}</S.ItemTitle>
              <S.ItemCreatedAt>{timeFormatter(item.createdAt)}</S.ItemCreatedAt>
            </S.ItemTitleSection>
            <S.ItemDescription>{item.description}</S.ItemDescription>
            <S.ItemPlace>습득장소: &nbsp;{item.lostPlaceDetail}</S.ItemPlace>
          </S.ItemContent>
        </S.Container>
      </S.ItemWrapper>
    </>
  );
};

export default Item;
