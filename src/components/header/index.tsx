import React from 'react';
import * as S from './index.style';
import arrow from '../../assets/arrow_back.svg';
import { useNavigate } from 'react-router-dom';

export default function Header({ title }: { title: string }) {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.Arrow src={arrow} alt="arrow" onClick={() => navigate(-1)} />
      <S.Title>{title}</S.Title>
    </S.HeaderContainer>
  );
}
