import styled from '@emotion/styled';

export const Container = styled.div`
  /* position: absolute; */
  position: fixed;
  /* bottom: 22px; */
  bottom: 100px;
  z-index: 100;
  width: 100%;
  max-width: 550px;
`;

export const BoothList = styled.div`
  display: flex;
  gap: 14px;
  overflow-x: auto;
  white-space: nowrap;
  padding-left: 20px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoothItemContainer = styled.div`
  background-color: #fff;
  padding: 14px 16px;
  display: flex;
  gap: 13px;
  align-items: center;
`;

export const TotalButtonContainer = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 6px;

  border: 1.378px solid #0100a3;
  background: #fff;
  cursor: pointer;

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 100%;
  margin-bottom: 12px;
`;

export const ButtonText = styled.div`
  color: #0100a3;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 19.6px */
  letter-spacing: -0.35px;
`;
export const TotalButtonImg = styled.img``;

export const BoothItemImg = styled.img`
  width: 86px;
  height: 86px;
`;

export const BoothTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 174px;
  max-width: 174px;
`;

export const BoothName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.45px;

  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘친 부분을 ... 으로 표시 */
`;

export const BoothType = styled.div`
  color: #7f8992;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.325px;

  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘친 부분을 ... 으로 표시 */
`;

export const BoothNotice = styled.div`
  color: #7f8992;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.325px;

  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘친 부분을 ... 으로 표시 */
`;

export const BoothLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const BoothLocationIcon = styled.img``;

export const BoothLocationText = styled.div`
  color: #464b50;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.325px;
`;
