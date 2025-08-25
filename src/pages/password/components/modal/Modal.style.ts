import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 2rem 1.8rem;
  background-color: ${({ theme }) => theme.colors.basic.white};

  width: calc(100% - 7.6rem);
  align-items: center;
`;

export const ModalText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16}
  color: ${({ theme }) => theme.colors.basic.light_black};
  text-align: center;
`;

export const ModalButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
  margin-top: 2.4rem;

  ${({ theme }) => theme.fonts.pretender_16}
  background-color: ${({ theme }) => theme.colors.blue.blue40};
  color: ${({ theme }) => theme.colors.basic.white};

  padding: 0.8rem 3.2rem;
  border: none;
  cursor: pointer;
`;
