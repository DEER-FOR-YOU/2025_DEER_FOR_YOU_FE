import styled from '@emotion/styled';

type ButtonProps = {
  buttonType?: 'util' | 'check';
};

export const ButtonContainer = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  padding: ${({ buttonType }) =>
    buttonType === 'util' ? '1.6rem 2rem' : '1.6rem 14.7rem'};
  background-color: ${({ theme }) => theme.colors.blue.blue40};
  color: ${({ theme }) => theme.colors.basic.white};
  ${({ theme }) => theme.fonts.neo_dunggeunmo_16}

  &:disabled {
    background-color: ${({ theme }) => theme.colors.basic.gray};
    cursor: not-allowed;
  }
`;
