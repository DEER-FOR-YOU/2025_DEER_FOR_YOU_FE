import styled from '@emotion/styled';

export const BoothCardContainer = styled.div`
  border: 1px solid #bec6cd;
  cursor: pointer;
`;

export const BoothCardImage = styled.img<{ fullSize: boolean }>`
  width: 100%;
  aspect-ratio: ${({ fullSize }) => (fullSize ? '350/320' : '350/96')};
  object-position: ${({ fullSize }) => (fullSize ? 'bottom' : 'center')};
  object-fit: ${({ fullSize }) => (fullSize ? 'fill' : 'fill')};
`;

export const TextContainer = styled.div`
  padding: 12px;

  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const TextFitstRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FirstRowLeft = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

export const BoothName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;
`;

export const BoothType = styled.div`
  color: #bec6cd;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
`;

export const HeartIcon = styled.img`
  cursor: pointer;
`;

export const TextSecondRow = styled.div`
  display: flex;
  gap: 13px;
`;

export const TimeContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const TimeIcon = styled.img``;

export const TimeText = styled.div`
  color: #7f8992;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;
  text-transform: capitalize;
`;

export const PlaceContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;
export const PlaceIcon = styled.img``;
