import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 20px;
  margin-top: 36px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -1px;
`;

export const SubTitle = styled.div`
  color: #a6afb7;
  font-family: 'Pretendard';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
`;

export const EventContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const EventRowBox = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 13px; */
  justify-content: space-between;
`;

export const EventName = styled.div`
  color: #252528;
  font-family: 'NeoDunggeunmoPro';
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
`;

export const Detail = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  color: #fff;
  padding: 5px 3px;

  font-family: 'NeoDunggeunmoPro';
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
  background-color: #4544ff;

  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;

export const PolygonImage = styled.img`
  position: absolute;
  top: 15px;
  right: 48px;

  animation: float 2s ease-in-out infinite;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-8px);
    }
  }
`;
