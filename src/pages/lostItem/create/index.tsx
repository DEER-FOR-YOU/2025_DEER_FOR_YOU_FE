import React, { useEffect, useRef, useState } from 'react';
import * as S from './index.style';
import Header from '../../../components/header';
import Input from '../components/input/Input';
import { createLostItem } from '../../../apis/lostItem';
import DeleteButton from '../assets/close.svg';
import AddImage from '../assets/addImage.svg';
import { useToastContext } from '../../../components/toast/Toast';
import { useNavigate } from 'react-router-dom';
import { useApiQuery } from '../../../apis/config/builder/ApiBuilder';
import { getMember } from '../../../apis/notice';

const LostItemCreatePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lostPlace, setLostPlace] = useState('');
  const [lostPlaceDetail, setLostPlaceDetail] = useState('');
  const [itemType, setItemType] = useState('');
  const [lostDate, setLostDate] = useState('');

  type ImageItem = { file: File; url: string };
  const [images, setImages] = useState<ImageItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [currentSlot, setCurrentSlot] = useState<number | null>(null);

  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });
  const { show } = useToastContext();
  const navigate = useNavigate();

  const isAvailableSubmit =
    title !== '' &&
    description !== '' &&
    lostPlace !== '' &&
    lostPlaceDetail !== '' &&
    itemType !== '' &&
    lostDate !== '' &&
    images.length > 0;

  useEffect(() => {
    if (!memberData) return;

    if (memberData.role !== 'ROLE_ADMIN') {
      show('이용할 수 없는 기능입니다.', 'error', true);
      navigate('/lost-item');
    }
  }, [memberData, show, navigate]);

  const handleCreateLostItem = () => {
    createLostItem(
      {
        title,
        description,
        lostPlace,
        lostPlaceDetail,
        itemType,
        lostDate,
      },
      images.map((it) => it.file),
    )
      .execute()
      .then(() => {
        show('분실물 등록이 완료되었습니다.', 'info', true);
        navigate('/lost-item');
      })
      .catch(() => {
        show('분실물 등록에 실패했습니다.', 'error', true);
      });
  };

  const handleAddClick = (slotIndex: number) => {
    setCurrentSlot(slotIndex);
    fileInputRef.current?.click();
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setImages((prev) => {
      const newItem: ImageItem = { file, url: URL.createObjectURL(file) };
      const next = [...prev];
      if (currentSlot !== null && currentSlot >= 0) {
        if (currentSlot < next.length) next[currentSlot] = newItem;
        else next.push(newItem);
      } else {
        next.push(newItem);
      }
      return next;
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
    setCurrentSlot(null);
  };

  const handleRemove = (index: number) => {
    setImages((prev) => {
      const next = [...prev];
      const item = next[index];
      if (item) URL.revokeObjectURL(item.url);
      next.splice(index, 1);
      return next;
    });
  };

  return (
    <>
      <Header title="분실물" />
      <S.Container>
        <S.Title>분실 정보를 입력하세요</S.Title>
        <S.InputWrapper>
          <Input
            label="분실물 이름"
            type="text"
            value={title}
            onChange={(v: string) => setTitle(v)}
          />
          <Input
            label="카테고리 분류"
            type="picker"
            value={itemType}
            onChange={(v: string) => setItemType(v)}
          />
          <Input
            label="분실 위치"
            type="picker"
            value={lostPlace}
            onChange={(v: string) => setLostPlace(v)}
          />
          <Input
            label="분실 위치 상세"
            type="text"
            value={lostPlaceDetail}
            onChange={(v: string) => setLostPlaceDetail(v)}
          />
          <Input
            label="분실 추정 시간"
            type="datetime-local"
            value={lostDate}
            onChange={(v: string) => setLostDate(v)}
          />
          <Input
            label="상세정보 입력하기"
            type="text"
            value={description}
            onChange={(v: string) => setDescription(v)}
          />
        </S.InputWrapper>
        <S.ImageSection>
          <S.ImageSectionTitle>사진 첨부</S.ImageSectionTitle>
          <S.ImageGrid>
            {(() => {
              const slotsCount = images.length + 1;
              return Array.from({ length: slotsCount }).map((_, i) => {
                const item = images[i];
                return (
                  <S.ImageSlot key={i}>
                    {item ? (
                      <>
                        <S.Thumb src={item.url} alt={`preview-${i}`} />
                        <S.RemoveButton
                          src={DeleteButton}
                          onClick={() => handleRemove(i)}
                        />
                      </>
                    ) : (
                      <S.AddSlot onClick={() => handleAddClick(i)}>
                        <img src={AddImage} alt="add" />
                      </S.AddSlot>
                    )}
                  </S.ImageSlot>
                );
              });
            })()}
          </S.ImageGrid>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
        </S.ImageSection>
        <S.SubmitButton
          onClick={handleCreateLostItem}
          disabled={!isAvailableSubmit}
        >
          등록하기
        </S.SubmitButton>
      </S.Container>
    </>
  );
};

export default LostItemCreatePage;
