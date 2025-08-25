import styled from '@emotion/styled';

export const Container = styled.div`
  margin-bottom: 36px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Title = styled.div`
  color: #222;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;
`;

export const ConentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 4px;
`;

export const Header = styled.div`
  padding: 4px 10px;
  color: #fff;

  font-family: 'NeoDunggeunmoPro';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
  background-color: #0100a3;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding-bottom: 22px;
`;
export const ButtonText = styled.div`
  font-family: 'NeoDunggeunmoPro';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.8px;
  padding: 15px 30px;
  text-align: center;
  cursor: pointer;
`;

export const ButtonText2 = styled.div`
  font-family: 'NeoDunggeunmoPro';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.8px;
  padding: 15px 44px;
  text-align: center;
  cursor: pointer;
`;
export const MapWrapper = styled.div`
  padding: 16px;
  position: relative;
`;

export const MapImage = styled.img`
  width: 100%;
`;

//부드 리스트
export const BotthList = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  position: absolute;
  bottom: 36px;

  overflow-x: auto;
  white-space: nowrap;
  max-width: calc(100% - 40px);
  margin: 0 4px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const BoothItem = styled.div`
  padding: 11px 16px 11px 12px;
  background-color: #fff;
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

export const BoothImage = styled.img`
  width: 70px;
  height: 70px;
`;
export const BoothTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 140px;
  width: 140px;
`;

export const BoothName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 21px */
  letter-spacing: -0.35px;

  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘친 부분을 ... 으로 표시 */
`;

export const BoothType = styled.div`
  color: #7f8992;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 15px */
  letter-spacing: -0.25px;

  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘친 부분을 ... 으로 표시 */
`;

export const BoothNotice = styled.div`
  color: #7f8992;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 15px */
  letter-spacing: -0.25px;

  overflow: hidden; /* 넘치는 텍스트 숨김 */
  white-space: nowrap; /* 줄바꿈 방지 */
  text-overflow: ellipsis; /* 넘친 부분을 ... 으로 표시 */

  margin-top: -3px;
  margin-bottom: 1px;
`;

export const BoothLocationContainer = styled.div`
  display: flex;
  gap: 3px;
`;

export const BoothLocation = styled.img``;

export const BoothLocationText = styled.div`
  color: #464b50;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 15px */
  letter-spacing: -0.25px;
`;
