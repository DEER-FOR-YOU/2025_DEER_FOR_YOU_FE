import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import * as S from './noticeItem.style';
import arrowDown from '../../assets/arrow_down.svg';

interface NoticeItemProps {
  notice: {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  };
  isExpanded?: boolean;
  onToggle?: (id: number) => void;
}

export default function NoticeItem({
  notice,
  isExpanded = false,
  onToggle,
}: NoticeItemProps) {
  const [isOpen, setIsOpen] = useState(isExpanded);

  const handleToggle = () => {
    const newState = !isOpen;
    setIsOpen(newState);
    onToggle?.(notice.id);
  };

  return (
    <>
      <S.Container>
        <S.TextFlex>
          <S.Title>{notice.title}</S.Title>
          <S.CreatedAt>{notice.createdAt}</S.CreatedAt>
        </S.TextFlex>
        <S.ArrowDown src={arrowDown} alt="arrow_down" onClick={handleToggle} />
      </S.Container>
      {isOpen && (
        <S.ContentConatiner>
          <ReactMarkdown>{notice.content}</ReactMarkdown>
        </S.ContentConatiner>
      )}
    </>
  );
}
