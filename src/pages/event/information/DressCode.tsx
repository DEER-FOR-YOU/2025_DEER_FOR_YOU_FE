import React from 'react';
import * as S from './information.style';
import DresscodeItem from '../assets/dresscodeItem.svg';

const DressCode = () => {
  return (
    <S.Container>
      <S.BasicRow>
        <S.BasicRowSubText>혜택 1</S.BasicRowSubText>
        <S.BasicRowBlackText>소정의 상품 제공</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowSubText>혜택 2</S.BasicRowSubText>
        <S.BasicRowBlackText>소속감 증대</S.BasicRowBlackText>
      </S.BasicRow>
      <S.CustomMargin topSize={3.6} />
      <S.Title>드레스코드: 블루</S.Title>
      <S.CustomMargin bottomSize={2.4} />
      <S.BasicRow>
        <S.BasicRowBlackText>상의 하의 모두 착용</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>드레스코드에 맞춰서 의상 착용</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.Image src={DresscodeItem} alt="Dresscode item" />
      <S.CustomMargin bottomSize={3.6} />
      <S.SmallTitle>이벤트 유의사항</S.SmallTitle>
      <S.CustomMargin topSize={1} />
      <S.BasicRowSmallText>
        완벽하게 일치하지 않아도 비슷한 색상이면 가능하다
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        학생회비 납부여부 확인 후 상품 증정
      </S.BasicRowSmallText>
      <S.CustomMargin bottomSize={8} />
    </S.Container>
  );
};

export default DressCode;
