import styled from '@emotion/styled';

export const GoodsContainer = styled.div`
  padding-bottom: 164px;
`;

export const GoodsBanner = styled.img`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 36px;
`;

export const MainTextContainer = styled.div`
  padding: 0 22px;
  margin-bottom: 36px;
`;
export const MainText = styled.div`
  ${({ theme }) => theme.fonts.pretender_20}
  font-weight: 600;
`;
export const SubText = styled.div`
  ${({ theme }) => theme.fonts.pretender_14}
  color: #a6afb7;
`;
export const DetailContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 56px;
`;

export const WhenWhereContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5.5px;
`;

export const WhenContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const WhenImageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const LabelText = styled.div`
  ${({ theme }) => theme.fonts.pretender_18}
  font-weight: 600;
`;
export const Border = styled.div`
  color: #d2d9df;
  font-family: Pretender;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.6px;
`;
export const ContentText = styled.div`
  color: #000;
  font-family: Pretender;
  font-size: 16px;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

export const DetailTextContainer = styled.div``;

export const DetailText = styled.div`
  font-size: 1.3rem;
  letter-spacing: -0.325px;
  font-family: Pretender;
  color: #a6afb7;
`;

export const SpanBlue = styled.span`
  color: #0100a3;
  font-family: Pretender;
`;
