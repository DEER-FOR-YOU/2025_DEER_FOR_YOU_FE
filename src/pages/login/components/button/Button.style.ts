import styled from '@emotion/styled';

type ButtonProps = {
  buttonType?: 'login' | 'non-login';
};

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ buttonType, theme }) =>
    buttonType === 'login'
      ? theme.colors.blue.blue40
      : theme.colors.basic.white};
  border: ${({ buttonType, theme }) =>
    buttonType === 'login' ? 'none' : `1px solid ${theme.colors.blue.blue40}`};
  padding: ${({ buttonType }) =>
    buttonType === 'login' ? '1.6rem 14.7rem' : '1.6rem 8.4rem'};
  ${({ theme }) => theme.fonts.neo_dunggeunmo_16}
  color: ${({ buttonType, theme }) =>
    buttonType === 'login'
      ? theme.colors.basic.white
      : theme.colors.blue.blue40};
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.basic.gray};
    cursor: not-allowed;
  }
`;
