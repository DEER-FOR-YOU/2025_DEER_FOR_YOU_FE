import React, { useMemo } from 'react';
import * as S from './board.style';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getVisitor } from '../../apis/visitor';

// const data = {
//   number: 4186,
//   time: '2025.09.09. 14:10',
// };

const calculatePercentage = (number: number) => {
  return (number / 10000) * 100;
};

export default function Board() {
  const { data, isLoading } = useApiQuery(getVisitor(), ['visitor']);

  // 시간을 메모이제이션하여 부모 컴포넌트 리렌더링 시에도 변경되지 않도록 함
  const currentTime = useMemo(() => new Date(), []);

  if (isLoading) {
    return <div></div>;
  }

  const percentage = calculatePercentage(data?.totalUniqueView || 0);

  return (
    <S.Wrapper>
      <S.HeaderContainer>
        <S.HeaderLeftContainer>
          <S.HeaderTitle>누적 이용자수</S.HeaderTitle>
          <S.HeaderTitleDeatil>실시간</S.HeaderTitleDeatil>
        </S.HeaderLeftContainer>
        <S.HeaderRightContainer>
          <S.RightText>
            {currentTime.toLocaleString('ko-KR', {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit',
              hour12: false,
            })}
          </S.RightText>
          <S.RightText>기준</S.RightText>
        </S.HeaderRightContainer>
      </S.HeaderContainer>
      <S.NumberTextContainer>
        <S.NumberBigText>
          {data?.totalUniqueView.toLocaleString()}
        </S.NumberBigText>
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
