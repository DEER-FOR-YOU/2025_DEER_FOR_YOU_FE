import React from 'react';
import * as S from './index.style';
import Header from '../../../components/header';
import send from '../../../assets/send.svg';

export default function NoticePostPage() {
  return (
    <S.Container>
      <Header title="공지사항" />
      <S.Button src={send} alt="send" />
      <S.TitleContainer>
        <S.Title placeholder="제목을 입력하세요" />
      </S.TitleContainer>
    </S.Container>
  );
}
