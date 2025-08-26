import styled from '@emotion/styled';

export const LostContainer = styled.div`
  margin-top: 40px;
  padding: 0 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 18px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.div`
  color: #000;
  font-family: Pretendard Variable;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -1px;
`;

export const HeaderSubTitle = styled.div`
  color: #a6afb7;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
`;

export const MoreText = styled.div`
  color: #bec6cd;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 12px */
  letter-spacing: -0.3px;
  text-decoration: underline;
  cursor: pointer;
`;

export const LostList = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  overflow-x: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const LostItemContainer = styled.div`
  padding: 10px 12px 16px 12px;
`;

export const LostItemImageContainer = styled.div`
  width: 124px;
  height: 124px;
`;
export const LostItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;

export const LostItemTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
  margin-top: 8px;
  margin-bottom: 2px;
`;

export const LostItemInfoContainer = styled.div`
  display: flex;
  gap: 6px;
`;
export const LostItemInfoText = styled.div`
  color: #a6afb7;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
`;

export const NoItemSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: auto 0;
  width: 100%;
`;

export const NoItemTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_20};
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-weight: 600;
  letter-spacing: -0.03rem;
  margin-top: 2rem;
`;
