import React, { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import * as S from './noticeItem.style';
import arrowDown from '../../assets/arrow_down.svg';
import editIcon from '../../assets/edit.svg';
import deleteIcon from '../../assets/delete.svg';
import { deleteNotice } from '../../apis/notice';
import { useApiMutation } from '../../apis/config/builder/ApiBuilder';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { formatDateTime } from '../../utils/formatDate';

interface NoticeItemProps {
  notice: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  };
  isExpanded?: boolean;
  onToggle?: (id: number) => void;
  isAdmin?: boolean;
}

export default function NoticeItem({
  notice,
  isExpanded = false,
  onToggle,
  isAdmin,
}: NoticeItemProps) {
  const [isOpen, setIsOpen] = useState(isExpanded);
  const [slideOffset, setSlideOffset] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(notice.id);
  };
  const { mutate: deleteNoticeMutation } = useApiMutation(
    deleteNotice(notice.id),
    {
      onSuccess: () => {
        alert('삭제 성공');
        queryClient.invalidateQueries({ queryKey: ['notice'] });
      },
      onError: () => {
        alert('삭제 실패');
      },
    },
  );

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isAdmin) return; // 관리자가 아니면 슬라이딩 불가
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isAdmin) return; // 관리자가 아니면 슬라이딩 불가

    const currentX = e.touches[0].clientX;
    const diff = startX - currentX;

    if (diff > 0) {
      // 왼쪽으로 슬라이딩
      const newOffset = Math.min(diff, 200); // 최대 200px까지
      setSlideOffset(newOffset);
    } else if (diff < 0 && slideOffset > 0) {
      // 오른쪽으로 슬라이딩하고 현재 열려있으면 닫기
      const newOffset = Math.max(slideOffset + diff, 0);
      setSlideOffset(newOffset);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging || !isAdmin) return; // 관리자가 아니면 슬라이딩 불가

    if (slideOffset > 100) {
      // 슬라이딩이 충분히 되었으면 완전히 열기
      setSlideOffset(200);
    } else {
      // 충분하지 않으면 원래대로
      setSlideOffset(0);
    }

    setIsDragging(false);
  };

  // 마우스 이벤트 핸들러
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!isAdmin) return; // 관리자가 아니면 슬라이딩 불가
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !isAdmin) return; // 관리자가 아니면 슬라이딩 불가

    const diff = startX - e.clientX;

    if (diff > 0) {
      // 왼쪽으로 슬라이딩
      const newOffset = Math.min(diff, 200);
      setSlideOffset(newOffset);
    } else if (diff < 0 && slideOffset > 0) {
      // 오른쪽으로 슬라이딩하고 현재 열려있으면 닫기
      const newOffset = Math.max(slideOffset + diff, 0);
      setSlideOffset(newOffset);
    }
  };

  const handleMouseUp = () => {
    if (!isDragging || !isAdmin) return; // 관리자가 아니면 슬라이딩 불가

    if (slideOffset > 100) {
      setSlideOffset(200);
    } else {
      setSlideOffset(0);
    }

    setIsDragging(false);
  };

  const handleDelete = () => {
    deleteNoticeMutation();
  };

  const handleEdit = () => {
    navigate(`/notice/edit/${notice.id}`);
  };

  return (
    <>
      <S.NoticeItemWrapper>
        {/* 슬라이딩 액션 버튼들 - 관리자일 때만 표시 */}
        {isAdmin && (
          <S.ActionButtons isVisible={slideOffset > 0}>
            <S.EditButton onClick={handleEdit}>
              <S.EditIcon src={editIcon} alt="edit" />
            </S.EditButton>
            <S.DeleteButton onClick={handleDelete}>
              <S.DeleteIcon src={deleteIcon} alt="delete" />
            </S.DeleteButton>
          </S.ActionButtons>
        )}

        {/* 메인 컨테이너 */}
        <S.Container
          ref={containerRef}
          style={{
            transform: `translateX(-${slideOffset}px)`,
            transition: isDragging ? 'none' : 'transform 0.3s ease',
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <S.TextFlex>
            <S.Title>{notice.title}</S.Title>
            <S.CreatedAt>{formatDateTime(notice.createdAt)}</S.CreatedAt>
          </S.TextFlex>
          <S.ArrowDown
            src={arrowDown}
            alt="arrow_down"
            onClick={handleToggle}
          />
        </S.Container>
      </S.NoticeItemWrapper>

      {isOpen && (
        <S.ContentConatiner>
          <ReactMarkdown>{notice.content}</ReactMarkdown>
        </S.ContentConatiner>
      )}
    </>
  );
}
