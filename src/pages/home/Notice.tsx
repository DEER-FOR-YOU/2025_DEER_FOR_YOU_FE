import React from 'react';
import * as S from './notice.style';
import Outer from '../../components/container/outer';

export default function Notice() {
  return (
    <S.Container>
      <S.NoticeHeader>공지사항</S.NoticeHeader>
      <Outer>123</Outer>
    </S.Container>
  );
}
