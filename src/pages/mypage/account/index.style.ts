import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 4rem);
  gap: 2.4rem;
  margin-top: 3.5rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  width: 100%;
`;

export const LeftText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.mid_black};
`;

export const RightText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.dark_gray};

  span {
    ${({ theme }) => theme.fonts.pretender_16};
    color: ${({ theme }) => theme.colors.blue.blue30};
    cursor: pointer;
  }
`;
