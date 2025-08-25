import React from 'react';
import * as S from './Modal.style';

const Modal = ({
  setIsError,
}: {
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      <S.ModalContainer onClick={() => setIsError(false)}>
        <S.ModalWrapper onClick={(e) => e.stopPropagation()}>
          <S.ModalText>입력한 아이디 혹은 비밀번호가</S.ModalText>
          <S.ModalText>올바르지 않습니다. 다시 시도하세요.</S.ModalText>
          <S.ModalButton onClick={() => setIsError(false)}>확인</S.ModalButton>
        </S.ModalWrapper>
      </S.ModalContainer>
    </>
  );
};

export default Modal;
