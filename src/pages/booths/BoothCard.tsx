import React from 'react';
import * as S from './boothCard.style';
import heart from '../../assets/heart.svg';
import time from '../../assets/when.svg';
import place from '../../assets/where.svg';
import { getKorLocation } from '../../utils/getKorLocation';
import { getBoothTypeText } from '../../utils/getBoothTypeText';
import { useNavigate } from 'react-router-dom';
// import basic_booth from '../../assets/basic_booth.png';

export default function BoothCard({ booth }: { booth: any }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (booth.boothAffiliation === 'COUNCIL') {
      navigate(`/events?name=${booth.boothName}`);
    } else {
      navigate(`/booths/${booth.id}`);
    }
  };

  return (
    <S.BoothCardContainer onClick={handleClick}>
      <S.BoothCardImage
        src={booth.image.imageUrl}
        alt={booth.name}
        fullSize={booth.boothAffiliation === 'COUNCIL' ? true : false}
        style={{
          backgroundColor: !booth.image.imageUrl ? '#BEC6CD' : 'transparent',
        }}
      />
      <S.TextContainer>
        <S.TextFitstRow>
          <S.FirstRowLeft>
            <S.BoothName>{booth.boothName}</S.BoothName>
            <S.BoothType>
              {getBoothTypeText(booth.boothType, booth.boothAffiliation)}
            </S.BoothType>
          </S.FirstRowLeft>
          <S.HeartIcon src={heart} alt="heart" />
        </S.TextFitstRow>
        <S.TextSecondRow>
          <S.TimeContainer>
            <S.TimeIcon src={time} alt="time" />
            <S.TimeText>{booth.operationTime}</S.TimeText>
          </S.TimeContainer>
          <S.PlaceContainer>
            <S.PlaceIcon src={place} alt="place" />
            <S.TimeText>
              {getKorLocation(booth.boothLocation)}{' '}
              {booth.locationDetail === 'FOOD_TRUCK'
                ? ''
                : booth.locationDetail}
            </S.TimeText>
          </S.PlaceContainer>
        </S.TextSecondRow>
      </S.TextContainer>
    </S.BoothCardContainer>
  );
}
