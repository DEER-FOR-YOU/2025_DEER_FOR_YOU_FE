import styled from '@emotion/styled';

export const Container = styled.div``;

export const Banner = styled.img`
  width: 100%;
  margin-bottom: 36px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding-bottom: 12px;
  border-bottom: 1px solid #bec6cd;
  margin-bottom: 36px;
`;
export const HeaderItem = styled.div<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? '#0100A3' : '#9fa6ac')};
  text-align: center;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;

  cursor: pointer;
`;

export const ContentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 0 20px;
`;

export const ContentItem = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
`;

export const ContetntImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 100px;
  border: 1px solid #d2d9df;
  /* object-fit: cover; */
`;

export const ContentTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentName = styled.div`
  color: #000;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 30px */
  letter-spacing: -0.5px;
`;

export const ContentRole = styled.div`
  color: #464b50;
  font-family: 'Pretendard';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.45px;
`;

export const ContentMajor = styled.div`
  color: #7f8992;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
  margin-top: 4px;
`;
