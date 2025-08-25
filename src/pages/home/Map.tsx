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
import { getRandomBooths } from '../../apis/booth';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getBoothTypeText } from '../../utils/getBoothTypeText';
import { getBoothLocationText } from '../../utils/getBoothLocationText';

export default function Map() {
  const navigate = useNavigate();
  const boothListRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useApiQuery(getRandomBooths(), [
    'booth',
    'random',
  ]);

  // 자동 스크롤 기능
  useEffect(() => {
    // 데이터가 로딩되지 않았거나 boothList가 없으면 실행하지 않음
    if (!data || !boothListRef.current) return;

    // DOM 업데이트 후 약간의 지연을 주어 안정적인 스크롤 시작
    const timer = setTimeout(() => {
      const boothList = boothListRef.current;
      if (!boothList) return;

      const autoScroll = () => {
        // 스크롤이 끝에 도달하면 처음으로 돌아가기
        if (
          boothList.scrollLeft >=
          boothList.scrollWidth - boothList.clientWidth - 1
        ) {
          boothList.scrollLeft = 0;
        } else {
          // 오른쪽으로 2px씩 스크롤 (더 부드러운 움직임)
          boothList.scrollLeft += 2;
        }
      };

      // 50ms마다 스크롤 실행 (적당한 속도)
      const intervalId = setInterval(autoScroll, 50);

      // 컴포넌트 언마운트 시 인터벌 정리
      return () => clearInterval(intervalId);
    }, 100); // 100ms 지연

    return () => clearTimeout(timer);
  }, [data]); // data를 의존성 배열에 추가

  if (isLoading || !data) {
    return <div></div>;
  }

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
            {data.map((item) => (
              <S.BoothItem key={item.id}>
                <S.BoothImage
                  src={item.image?.imageUrl || basic_booth}
                  alt="booth"
                />
                <S.BoothTextContainer>
                  <S.BoothName>{item.boothName}</S.BoothName>
                  <S.BoothType>
                    {getBoothTypeText(item.boothType, item.boothAffiliation)}
                  </S.BoothType>
                  <S.BoothNotice>{item.boothNotice}</S.BoothNotice>
                  <S.BoothLocationContainer>
                    <S.BoothLocation src={where} alt="where" />
                    <S.BoothLocationText>
                      {getBoothLocationText(item.locationDetail)}
                    </S.BoothLocationText>
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
