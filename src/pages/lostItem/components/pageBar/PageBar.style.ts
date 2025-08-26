import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
`;

export const PageButton = styled(Button)<{ isActive?: boolean }>`
  ${({ theme }) => theme.fonts.pretender_14};
  font-weight: 500;
  color: ${({ isActive, theme }) =>
    isActive ? 'white' : theme.colors.basic.dark_gray};
  background: ${({ isActive, theme }) =>
    isActive ? theme.colors.blue.blue40 : 'transparent'};
`;

export const Arrow = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;

  margin: 0 0.6rem;
`;
