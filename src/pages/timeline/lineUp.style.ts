import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 20px;
`;
export const Title = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;
`;

export const SubTitle = styled.div`
  color: #a6afb7;
  font-family: 'Pretendard';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
  margin-bottom: 16px;
`;

export const ImgContainer = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 36px;
  line-height: 0;
`;

export const ImgBox = styled.div`
  flex-grow: 1;
  position: relative;
`;
export const Img = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 1/1;
`;

export const ImgTextBox = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ImgOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
`;
export const ArtistText = styled.div`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

export const WhenText = styled.div`
  color: #f1f3f5;
  font-family: 'Pretendard';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
`;

export const ImgContainer9 = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 36px;
  line-height: 0;
`;

export const ImgBox1 = styled.div`
  position: relative;
  flex-shrink: 0;
  width: calc(50% - 7px);
  min-width: calc(50% - 7px);
  aspect-ratio: 1/1;
  line-height: 0;
`;

export const ImgContainer10 = styled.div`
  display: flex;
  gap: 6px;
  margin-bottom: 36px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-right: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ImgBox10 = styled.div`
  position: relative;
  /* flex-grow: 1; */
  width: 50%;
`;
