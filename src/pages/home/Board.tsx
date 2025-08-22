import React from 'react';
import * as S from './board.style';

const data = {
  number: 4186,
  time: '2025.09.09. 14:10',
};

const calculatePercentage = (number: number) => {
  return (number / 10000) * 100;
};

export default function Board() {
  const percentage = calculatePercentage(data.number);

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.HeaderLeftContainer>
          <S.HeaderTitle>누적 이용자수</S.HeaderTitle>
          <S.HeaderTitleDeatil>실시간</S.HeaderTitleDeatil>
        </S.HeaderLeftContainer>
        <S.HeaderRightContainer>
          <S.RightText>{data.time}</S.RightText>
          <S.RightText>기준</S.RightText>
        </S.HeaderRightContainer>
      </S.HeaderContainer>
      <S.NumberTextContainer>
        <S.NumberBigText>{data.number.toLocaleString()}</S.NumberBigText>
        <S.NumberSmallText>{Math.floor(percentage)}%</S.NumberSmallText>
      </S.NumberTextContainer>
      <S.ProgressBarWrapper>
        <S.ProgressBarWrapper2>
          <S.ProgressBarContainer>
            <S.ProgressBarFill percentage={percentage} />
          </S.ProgressBarContainer>
        </S.ProgressBarWrapper2>
      </S.ProgressBarWrapper>
    </S.Wrapper>
  );
}
