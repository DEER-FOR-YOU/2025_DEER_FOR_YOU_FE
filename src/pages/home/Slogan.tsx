import React from 'react';
import * as S from './slogan.style';

interface SloganProps {
  onSloganClick: () => void;
}

export default function Slogan({ onSloganClick }: SloganProps) {
  return (
    <S.SloganContainer onClick={onSloganClick} style={{ cursor: 'pointer' }}>
      <S.SloganWrapper>
        <S.Slogan>상명의 울림, 60년을 노래하다, 축제 개요 살펴보기</S.Slogan>
        <S.Slogan>상명의 울림, 60년을 노래하다, 축제 개요 살펴보기</S.Slogan>
        <S.Slogan>상명의 울림, 60년을 노래하다, 축제 개요 살펴보기</S.Slogan>
        <S.Slogan>상명의 울림, 60년을 노래하다, 축제 개요 살펴보기</S.Slogan>
        <S.Slogan>상명의 울림, 60년을 노래하다, 축제 개요 살펴보기</S.Slogan>
        <S.Slogan>상명의 울림, 60년을 노래하다, 축제 개요 살펴보기</S.Slogan>
      </S.SloganWrapper>
    </S.SloganContainer>
  );
}
