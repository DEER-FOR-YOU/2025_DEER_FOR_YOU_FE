import React from 'react';
import * as S from './notice.style';
import Outer from '../../components/container/outer';
import Inner from '../../components/container/inner';

export default function Notice() {
  return (
    <S.Container>
      <S.NoticeHeader>공지사항</S.NoticeHeader>
      <Outer>
        <S.NoticeContainer>
          <Inner>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
          </Inner>
        </S.NoticeContainer>
      </Outer>
    </S.Container>
  );
}
