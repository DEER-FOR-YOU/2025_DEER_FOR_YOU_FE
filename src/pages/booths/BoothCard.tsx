import React from 'react';
import * as S from './boothCard.style';
import heart from '../../assets/heart.svg';
import time from '../../assets/when.svg';
import place from '../../assets/where.svg';
import { getKorLocation } from '../../utils/getKorLocation';
import { getBoothTypeText } from '../../utils/getBoothTypeText';

export default function BoothCard({ booth }: { booth: any }) {
  console.log(booth);

  return (
    <S.BoothCardContainer>
      <S.BoothCardImage
        src={booth.image.imageUrl}
        alt={booth.name}
        fullSize={booth.boothAffiliation === 'COUNCIL' ? true : false}
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
              {getKorLocation(booth.boothLocation)} {booth.locationDetail}
            </S.TimeText>
          </S.PlaceContainer>
        </S.TextSecondRow>
      </S.TextContainer>
    </S.BoothCardContainer>
  );
}
