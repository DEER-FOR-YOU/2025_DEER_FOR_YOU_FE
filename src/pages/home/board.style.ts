import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0 20px;
  margin: 50px 0;
`;

export const Container = styled.div`
  padding: 7.5px 6px 7.5px 15px;
  background-color: rgb(236, 239, 240);
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 16px;
`;
export const Title = styled.div`
  color: #000;
  font-family: 'NeoDunggeunmoPro';
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 144%;
  letter-spacing: -0.6px;
`;

export const NumberWrapper = styled.div`
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  flex-grow: 1;
  background: #d2d9df;
`;

export const NumberContainer = styled.div`
  border-left: 1px solid #7f8992;
  border-top: 1px solid #7f8992;
  padding: 6px 8px 4px 0;
  background: rgb(211, 217, 223);
  text-align: end;
`;

export const NumberText = styled.div`
  color: #000;
  font-family: 'NeoDunggeunmoPro';
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.9px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const HeaderTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;
`;
export const HeaderTitleDeatil = styled.div`
  color: #0100a3;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;

  padding: 2px 6px;
  border: 1px solid #0100a3;
`;

export const HeaderRightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RightText = styled.div`
  color: #bec6cd;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.325px;
`;

export const NumberTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 4px;
`;
export const NumberBigText = styled.div`
  color: #0100a3;
  font-size: 6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 60px */
  letter-spacing: -1.5px;
`;
export const NumberSmallText = styled.div`
  color: #0100a3;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 18px */
  letter-spacing: -0.45px;
`;
export const ProgressBarWrapper = styled.div`
  border-bottom: 1.5px solid rgb(242, 243, 245);
  border-right: 1.5px solid rgb(242, 243, 245);
`;
export const ProgressBarWrapper2 = styled.div`
  border-left: 1.5px solid rgb(219, 219, 219);
  border-top: 1.5px solid rgb(219, 219, 219);
`;

export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 10px;
  position: relative;
  background-color: white;
  display: flex;
  padding: 2px;
  overflow: hidden;
`;

export const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${({ percentage }) => percentage}%;
  background-image: repeating-linear-gradient(
    to right,
    #0100a3 0px,
    #0100a3 10px,
    transparent 10px,
    transparent 11px
  );
  transition: width 0.3s ease;
  position: relative;
`;
