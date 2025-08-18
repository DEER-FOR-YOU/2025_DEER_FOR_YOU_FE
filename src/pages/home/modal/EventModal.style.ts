import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  width: calc(100% - 40px);
  overflow-y: auto;
  position: absolute;
  top: 200px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 36px 20px 0 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2px;
`;

export const HeaderTitle = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%; /* 41.6px */
  letter-spacing: -0.8px;
`;
export const CloseIcon = styled.img`
  padding: 5px;
  cursor: pointer;
`;

export const Span = styled.span`
  color: #0ea5e6;
  font-family: 'Pretendard';
`;

export const FirstContent = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 20px;
`;

export const Border = styled.div`
  width: calc(100% + 40px);
  height: 1px;
  background: #d2d9df;
  margin: 40px -20px;
`;

export const Poster = styled.img`
  width: 100%;
  object-fit: cover;
`;
export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const DetailWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const DetailTitle = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.325px;
  width: 70px;
`;

export const DetailContent = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.325px;
`;

export const SpanBlue = styled.span`
  color: #0100a3;
  font-family: 'Pretendard';
`;

export const ConfirmButton = styled.button`
  color: #000;
  font-family: 'Pretendard';
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 27px */
  letter-spacing: -0.45px;
  padding: 16px 0;
  width: calc(100% + 40px);
  margin-left: -20px;
  margin-top: 60px;
  background: #eceff0;
`;
