import React from 'react';
import * as S from './goods.style';
import { useNavigate } from 'react-router-dom';

import background from '../../assets/background.svg';
import { ROUTES } from '../../constants/routes';

export default function Goods() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(ROUTES.GOODS);
  };

  return (
    <S.Wrapper background={background}>
      <S.Container>
        <S.ContentContainer>
          <S.Title>대동제 한정 굿즈</S.Title>
          <S.SubTitle>
            오직 대동제에서만 만날 수 있는 한정 굿즈를 살펴보세요.
          </S.SubTitle>
        </S.ContentContainer>
        <S.Button onClick={handleClick}>전체상품보기</S.Button>
      </S.Container>
    </S.Wrapper>
  );
}
