import React from 'react';
import * as S from './slogan.style';
import arrow_white from '../../assets/arrow_white.svg';

interface SloganProps {
  onSloganClick: () => void;
}

export default function Slogan({ onSloganClick }: SloganProps) {
  return (
    <S.SloganContainer onClick={onSloganClick} style={{ cursor: 'pointer' }}>
      <S.Slogan>상명의 울림, 60년을 노래하다, 축제 개요 살펴보기</S.Slogan>
      <S.Arrow src={arrow_white} alt="arrow_white" />
    </S.SloganContainer>
  );
}
