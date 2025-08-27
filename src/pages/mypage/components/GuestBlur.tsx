import React from 'react';
import * as S from '../index.style';

type Props = {
  onLoginClick: () => void;
  OVERLAY_ID?: string;
  blurRef?: React.RefObject<HTMLDivElement | null> | null;
};

const GuestBlur: React.FC<Props> = ({ onLoginClick, OVERLAY_ID, blurRef }) => {
  return (
    <S.BlurContainer id={OVERLAY_ID} data-deerforyou-guard="1" ref={blurRef}>
      <S.BlurText>지금 로그인하고</S.BlurText>
      <S.BlurText>관심 콘텐츠를 한 곳에서 이용해보세요!</S.BlurText>
      <S.BlurButton onClick={onLoginClick}>로그인/회원가입</S.BlurButton>
    </S.BlurContainer>
  );
};

export default GuestBlur;
