import React from 'react';
import * as S from './map.style';
import map from '../../assets/map.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Outer from '../../components/container/outer';
import Button from '../../components/button/Button';
import Inner from '../../components/container/inner';

export default function Map() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(ROUTES.MAP);
  };

  return (
    <S.Container>
      <S.Title>
        학교 곳곳에 있는
        <br /> 축제 부스를 지도에서 찾아보세요
      </S.Title>

      <Outer>
        <S.ConentContainer>
          <S.Header>전체지도 및 부스.smu</S.Header>
        </S.ConentContainer>
        <S.MapWrapper>
          <Inner>
            <S.MapImage src={map} alt="map" />
          </Inner>
        </S.MapWrapper>
        <S.ButtonContainer>
          <Button>
            <S.ButtonText onClick={handleButtonClick}>전체지도</S.ButtonText>
          </Button>
          <Button>
            <S.ButtonText2> 부스 </S.ButtonText2>
          </Button>
        </S.ButtonContainer>
      </Outer>
    </S.Container>
  );
}
