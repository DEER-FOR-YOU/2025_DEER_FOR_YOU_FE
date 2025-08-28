import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100vh;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ErrorIcon = styled.img`
  aspect-ratio: 1/1;
  margin-bottom: 2.2rem;
`;

export const ErrorTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_20}
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-weight: 600;

  margin-bottom: 0.2rem;
`;

export const ErrorText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16}
  color: ${({ theme }) => theme.colors.basic.gray};
  font-weight: 400;

  margin-bottom: 4rem;

  text-align: center;
`;

export const ErrorButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 20rem);

  padding: 1rem 3.2rem;
  ${({ theme }) => theme.fonts.pretender_16}
  color: ${({ theme }) => theme.colors.basic.white};

  background-color: ${({ theme }) => theme.colors.blue.blue40};

  cursor: pointer;
`;
