import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100vh;
  align-items: center;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.6rem;
  gap: 2rem;
  width: calc(100% - 4rem);
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  gap: 0.8rem;
  width: calc(100% - 4rem);
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  margin-bottom: 8rem;
  gap: 0.3rem;
  width: calc(100% - 4rem);
`;

export const NavigationText = styled.div`
  ${({ theme }) => theme.fonts.pretender_14}
  color: ${({ theme }) => theme.colors.basic.dark_gray};

  span {
    margin-left: 0.6rem;
    ${({ theme }) => theme.fonts.pretender_14}
    font-weight: 600;
    color: ${({ theme }) => theme.colors.blue.blue30};
    cursor: pointer;
  }
`;
