import React from 'react';
import * as S from './information.style';
import firstItem from '../assets/first.svg';
import secondItem from '../assets/second.svg';
import thirdItem from '../assets/third.svg';

const QrCode = () => {
  return (
    <S.Container>
      <S.BasicRow>
        <S.BasicRowSubText>혜택 1</S.BasicRowSubText>
        <S.BasicRowBlackText>소정의 상품 제공</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.Title>진행 방법</S.Title>
      <S.CustomMargin bottomSize={2.4} />
      <S.BasicRow>
        <S.BasicRowBlackText>
          캠퍼스 곳곳에서 10개의 QR 찾기
        </S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>
          무대 옆 총학생회 부스에서 상품 얻기
        </S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.EventSubText>10개의 QR을 모아</S.EventSubText>
      <S.EventText>다양한 상품을 받아가세요!</S.EventText>
      <S.CustomMargin bottomSize={2} />

      <S.BasicRow>
        <S.EventItemSection>
          <S.EventItemImage src={firstItem} alt="first Item" />
          <S.EventItemName>
            수뭉이 키링 <br />
            3개 1set
          </S.EventItemName>
        </S.EventItemSection>
        <S.EventItemSection>
          <S.EventItemImage src={secondItem} alt="second Item" />
          <S.EventItemName>
            코닥 <br /> 일회용 카메라
          </S.EventItemName>
        </S.EventItemSection>
        <S.EventItemSection>
          <S.EventItemImage src={thirdItem} alt="third Item" />
          <S.EventItemName>
            휴대용 에어컨 <br /> 선풍기
          </S.EventItemName>
        </S.EventItemSection>
      </S.BasicRow>
      <S.CustomMargin bottomSize={3.6} />
      <S.SmallTitle>이벤트 유의사항</S.SmallTitle>
      <S.CustomMargin topSize={1} />
      <S.BasicRowSmallText>
        학생회비 납부여부 확인 후 상품 증정
      </S.BasicRowSmallText>
      <S.CustomMargin bottomSize={8} />
    </S.Container>
  );
};

export default QrCode;
