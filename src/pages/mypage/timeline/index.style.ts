import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 100%;
  height: calc(100vh - 8rem);
`;

export const TimeList = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
  overflow-y: auto;

  margin-top: 1.3rem;
  padding-bottom: 10rem;
  border-top: 1px solid #d2d9df;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const NoItemSection = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: auto 0;
  width: 100%;
`;

export const NoItemIcon = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  flex-shrink: 0;
  aspect-ratio: 29/32;
`;

export const NoItemTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_20};
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-weight: 600;
  letter-spacing: -0.03rem;
  margin-top: 2rem;
`;

export const NoItemSubTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.gray};
  font-weight: 400;
  letter-spacing: -0.03rem;
`;
