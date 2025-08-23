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
}

export default function NoticeItem({ notice }: NoticeItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <S.Container>
        <S.TextFlex>
          <S.Title>{notice.title}</S.Title>
          <S.CreatedAt>{notice.createdAt}</S.CreatedAt>
        </S.TextFlex>
        <S.ArrowDown
          src={arrowDown}
          alt="arrow_down"
          onClick={() => setIsOpen(!isOpen)}
        />
      </S.Container>
      {isOpen && (
        <S.ContentConatiner>
          <ReactMarkdown>{notice.content}</ReactMarkdown>
        </S.ContentConatiner>
      )}
    </>
  );
}
