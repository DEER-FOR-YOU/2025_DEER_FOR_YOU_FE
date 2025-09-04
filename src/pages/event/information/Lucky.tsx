import React from 'react';
import * as S from './information.style';
import firstItem from '../assets/1st.svg';
import secondItem from '../assets/2nd.svg';
import thirdItem from '../assets/3rd.svg';

const Lucky = () => {
  return (
    <S.Container>
      <S.BasicRow>
        <S.BasicRowSubText>혜택 1</S.BasicRowSubText>
        <S.BasicRowBlackText>특별한 상품 증정</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.Title>진행 방법</S.Title>
      <S.CustomMargin bottomSize={2.4} />
      <S.BasicRow>
        <S.BasicRowBlackText>운영본부에서 행운권 티켓 배부</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>
          티켓을 반절 뜯어서 상자에 넣기
        </S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.BasicRow>
        <S.BasicRowBlackText>무대 행운권 추첨 시간에 참여</S.BasicRowBlackText>
      </S.BasicRow>
      <S.BasicHorizonLine />
      <S.CustomMargin topSize={3.6} />
      <S.EventSubText>티켓 한 장이 바꿀 수 있는</S.EventSubText>
      <S.EventText>행운의 순간 놓치지 마세요!</S.EventText>
      <S.CustomMargin bottomSize={2} />

      <S.BasicRow>
        <S.EventItemSection>
          <S.EventItemImage src={firstItem} alt="first Item" />
          <S.EventItemName>
            와이드뷰 HD
            <br />
            화이트 스마트 TV
          </S.EventItemName>
        </S.EventItemSection>
        <S.EventItemSection>
          <S.EventItemImage src={secondItem} alt="second Item" />
          <S.EventItemName>
            소니 노이즈캔슬링
            <br />
            무선 헤드폰
          </S.EventItemName>
        </S.EventItemSection>
        <S.EventItemSection>
          <S.EventItemImage src={thirdItem} alt="third Item" />
          <S.EventItemName>폴라로이드 카메라</S.EventItemName>
        </S.EventItemSection>
      </S.BasicRow>

      <S.CustomMargin topSize={3.6} />
      <S.SmallTitle>이벤트 유의사항</S.SmallTitle>
      <S.CustomMargin topSize={1} />
      <S.BasicRowSmallText>
        학생회비 납부자 재학생 한정 1인당 1장 증정
      </S.BasicRowSmallText>
      <S.BasicRowSmallText>
        상품 및 프로그램 진행은 추후 변경될 수 있음
      </S.BasicRowSmallText>
      <S.CustomMargin bottomSize={8} />
    </S.Container>
  );
};

export default Lucky;
