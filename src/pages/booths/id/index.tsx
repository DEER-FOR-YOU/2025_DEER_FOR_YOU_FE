import React, { useState, useEffect } from 'react';
import * as S from './index.style';
import Header from '../../map/Header';
import { useParams } from 'react-router-dom';
import { getBoothDetail } from '../../../apis/booth';
import { useApiQuery } from '../../../apis/config/builder/ApiBuilder';
import basic_booth from '../../../assets/basic_booth.png';
import { getBoothTypeText } from '../../../utils/getBoothTypeText';
import heart from '../../../assets/heart.svg';
import place from '../../../assets/where.svg';
import time from '../../../assets/when.svg';

export default function BoothsDetailPage() {
  const { id } = useParams();
  const [location, setLocation] = useState<string>('전체지도');

  const { data, isLoading } = useApiQuery(getBoothDetail(id), [
    'boothDetail',
    id,
  ]);

  useEffect(() => {
    if (data) {
      setLocation(data.boothLocation);
    }
  }, [data]);

  if (isLoading) {
    return <div></div>;
  }

  // 구조화 할당으로 data에서 필요한 속성들 추출
  const {
    boothAffiliation,
    boothLocation,
    boothName,
    boothNotice,
    boothType,
    operationTime,
    locationDetail,
  } = data || {};

  console.log(data);

  return (
    <S.Container>
      <Header title={location} />
      {data && (
        <>
          <S.BoothImage
            src={data.image.imageUrl || basic_booth}
            alt={data.boothName}
          />
          <S.ContentContainer>
            <S.NameTypeBookmarkContainer>
              <S.NameTypeContainer>
                <S.BoothName>{boothName}</S.BoothName>
                <S.BoothType>
                  {getBoothTypeText(
                    boothType || null,
                    boothAffiliation || null,
                  )}
                </S.BoothType>
              </S.NameTypeContainer>
              <S.HeartIcon src={heart} alt="heart" />
            </S.NameTypeBookmarkContainer>
            <S.PlaceTimeContainer>
              <S.PlaceContainer>
                <S.PlaceIcon src={time} alt="place" />
                <S.PlaceText>{operationTime}</S.PlaceText>
              </S.PlaceContainer>
              <S.PlaceContainer>
                <S.PlaceIcon src={place} alt="time" />
                <S.PlaceText>
                  {boothLocation === 'STUDENT_HALL' && '학생회관 앞 '}
                  {locationDetail === 'FOOD_TRUCK' ? '' : locationDetail}
                </S.PlaceText>
              </S.PlaceContainer>
            </S.PlaceTimeContainer>
          </S.ContentContainer>
          {boothNotice && (
            <S.NoticeWrapper>
              <S.NoticeContainer>
                <S.NoticeTextWrapper>
                  <S.NoticeText>안내</S.NoticeText>
                  <S.NoticeContent>{boothNotice}</S.NoticeContent>
                </S.NoticeTextWrapper>
              </S.NoticeContainer>
            </S.NoticeWrapper>
          )}
        </>
      )}
    </S.Container>
  );
}
