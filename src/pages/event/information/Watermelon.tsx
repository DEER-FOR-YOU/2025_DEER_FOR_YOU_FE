import React from 'react';
import * as S from './information.style';
import WatermelonItem from '../assets/watermelonItem.svg';

const Watermelon = () => {
  return (
    <S.Container>
      <S.BasicRow>
        <S.BasicRowSubText>혜택 1</S.BasicRowSubText>
        <S.BasicRowBlackText>성공 시 상품 제공</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowSubText>혜택 2</S.BasicRowSubText>
        <S.BasicRowBlackText>나의 민첩성 확인</S.BasicRowBlackText>
      </S.BasicRow>
      <S.CustomMargin topSize={3.6} />
      <S.Title>진행 방법</S.Title>
      <S.CustomMargin bottomSize={2.4} />
      <S.BasicRow>
        <S.BasicRowBlackText>수박 서리를 한다</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>농부의 추격을 피한다</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>지정된 지점까지 운반한다</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>
          농부가 도망자를 잡으면 실패 or 도망치면 성공!
        </S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.Image src={WatermelonItem} alt="watermelon item" />
      <S.CustomMargin bottomSize={3.6} />
      <S.SmallTitle>이벤트 유의사항</S.SmallTitle>
      <S.CustomMargin topSize={1} />
      <S.BasicRowSmallText>
        부상 예방을 위해 참가자는 빠르게 달리거나 격렬하게 움직일 때 주의
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        농부 역할을 맡은 사람은 과도하게 힘을 주지 않도록 주의
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        체험 전, 게임 규칙과 안전 수칙을 참가자들에게 충분히 안내
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        농부는 도망자와 적당한 거리를 두고 추격하며, 다칠 위험을 줄인다
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        게임 중 수박이 터지거나 파손되지 않도록 조심하고, 게임 종료 후 청소는
        반드시 진행
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        더운 날씨에는 음료수 및 그늘막을 준비해 참가자들이 건강을 유지할 수
        있도록 한다
      </S.BasicRowSmallText>
      <S.CustomMargin bottomSize={8} />
    </S.Container>
  );
};

export default Watermelon;
