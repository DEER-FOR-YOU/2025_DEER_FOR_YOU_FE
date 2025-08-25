import React, { useEffect, useRef } from 'react';
import * as S from './map.style';
import map from '../../assets/map.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import Outer from '../../components/container/outer';
import Button from '../../components/button/Button';
import Inner from '../../components/container/inner';
import basic_booth from '../../assets/basic_booth.png';
import where from '../../assets/where.svg';

const mapImage = [
  {
    id: 1,
    boothName: '기본 부스1',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 2,
    boothName: '기본 부스2',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 3,
    boothName: '기본 부스3',
    boothType: '체험',
    boothNotice: '체험 부스입니다.체험 부스입니다.체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 4,
    boothName: '기본 부스4',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 5,
    boothName: '기본 부스5',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 6,
    boothName: '기본 부스6',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 7,
    boothName: '기본 부스7',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 8,
    boothName: '기본 부스8',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
];

export default function Map() {
  const navigate = useNavigate();
  const boothListRef = useRef<HTMLDivElement>(null);

  // 자동 스크롤 기능
  useEffect(() => {
    const boothList = boothListRef.current;
    if (!boothList) return;

    const autoScroll = () => {
      // 스크롤이 끝에 도달하면 처음으로 돌아가기
      if (
        boothList.scrollLeft >=
        boothList.scrollWidth - boothList.clientWidth
      ) {
        boothList.scrollLeft = 0;
      } else {
        // 오른쪽으로 1px씩 스크롤
        boothList.scrollLeft += 1;
      }
    };

    // 30ms마다 스크롤 실행 (더 빠른 움직임)
    const intervalId = setInterval(autoScroll, 30);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(intervalId);
  }, []);

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
          <S.BotthList ref={boothListRef}>
            {mapImage.map((item) => (
              <S.BoothItem key={item.id}>
                <S.BoothImage src={item.image} alt="booth" />
                <S.BoothTextContainer>
                  <S.BoothName>{item.boothName}</S.BoothName>
                  <S.BoothType>{item.boothType}</S.BoothType>
                  <S.BoothNotice>{item.boothNotice}</S.BoothNotice>
                  <S.BoothLocationContainer>
                    <S.BoothLocation src={where} alt="where" />
                    <S.BoothLocationText>{item.location}</S.BoothLocationText>
                  </S.BoothLocationContainer>
                </S.BoothTextContainer>
              </S.BoothItem>
            ))}
          </S.BotthList>
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
