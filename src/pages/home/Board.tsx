import React from 'react';
import * as S from './board.style';

export default function Board() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>누적 이용자수</S.Title>
        <S.NumberWrapper>
          <S.NumberContainer>
            <S.NumberText>3086 명</S.NumberText>
          </S.NumberContainer>
        </S.NumberWrapper>
      </S.Container>
    </S.Wrapper>
  );
}
