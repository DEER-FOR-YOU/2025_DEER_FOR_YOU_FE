import React from 'react';
import * as S from './information.style';

const Physical = () => {
  return (
    <S.Container>
      <S.BasicRow>
        <S.BasicRowSubText>혜택 1</S.BasicRowSubText>
        <S.BasicRowBlackText>
          모든 참가자 365짐 1:1 프리미엄 수업 무료 제공
        </S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowSubText>혜택 2</S.BasicRowSubText>
        <S.BasicRowBlackText>
          입상자(1~3등) 별도 카카오톡 안내 및 상품 증정
        </S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.Title>진행 방법</S.Title>
      <S.CustomMargin bottomSize={2.4} />
      <S.BasicRow>
        <S.BasicRowBlackText>데드리프트 1RM 측정</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>턱걸이 개수</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>오래 매달리기 기록 측정</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.SmallTitle>이벤트 유의사항</S.SmallTitle>
      <S.CustomMargin topSize={1} />
      <S.BasicRowSmallText>
        부상 예방을 위해 참가자는 격렬하게 움직일 때 주의
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        충분한 스트레칭과 준비 운동을 한다
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        사전 규칙을 명확히 인지하고 미션 진행 중 불공정한 방법을 사용하지 않도록
        한다
      </S.BasicRowSmallText>
      <S.CustomMargin bottomSize={8} />
    </S.Container>
  );
};

export default Physical;
