import React from 'react';
import * as S from './map.style';
import Button from '../../components/button';
import map from '../../assets/map.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

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

      <Button>
        <S.ConentContainer>
          <S.Header>전체지도 및 부스.smu</S.Header>
        </S.ConentContainer>
        <S.MapWrapper>
          <S.MapImage src={map} alt="map" />
        </S.MapWrapper>
        <S.ButtonContainer>
          <Button style={{ width: '120px' }}>
            <S.ButtonText onClick={handleButtonClick}>전체지도</S.ButtonText>
          </Button>
          <Button style={{ width: '120px' }}>
            <S.ButtonText> 부스 </S.ButtonText>
          </Button>
        </S.ButtonContainer>
      </Button>
    </S.Container>
  );
}
