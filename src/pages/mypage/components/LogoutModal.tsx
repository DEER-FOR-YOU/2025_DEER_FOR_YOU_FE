import React from 'react';
import * as S from '../index.style';

type Props = {
  isClosing?: boolean;
  onBackdropClick?: () => void;
  onCancel?: () => void;
  onConfirm?: () => void;
};

const LogoutModal: React.FC<Props> = ({
  isClosing,
  onBackdropClick,
  onCancel,
  onConfirm,
}) => {
  return (
    <S.LogOutContainer isClosing={isClosing} onClick={onBackdropClick}>
      <S.LogOutWrapper
        onClick={(e) => e.stopPropagation()}
        isClosing={isClosing}
      >
        <S.LogOutContent>로그아웃 하시겠습니까?</S.LogOutContent>
        <S.ButtonWrapper>
          <S.LogOutButton type="cancel" onClick={onCancel}>
            취소
          </S.LogOutButton>
          <S.LogOutButton type="confirm" onClick={onConfirm}>
            로그아웃
          </S.LogOutButton>
        </S.ButtonWrapper>
      </S.LogOutWrapper>
    </S.LogOutContainer>
  );
};

export default LogoutModal;
