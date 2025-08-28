import styled from '@emotion/styled';

export const Container = styled.div`
  padding-bottom: 164px;
  position: relative;
`;

export const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.img`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;

export const NoItemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 20rem;
  width: 100%;
`;

export const NoItemIcon = styled.img`
  width: 2.9rem;
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
