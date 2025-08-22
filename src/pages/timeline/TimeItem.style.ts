import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px 14px 20px;
  gap: 4px;
  border-bottom: 1px solid #d2d9df;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.div`
  color: #464b50;
  font-family: Pretendard;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 19.5px */
  letter-spacing: -0.325px;
  padding: 2px 4px;
  border: 1px solid #d2d9df;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

export const Place = styled.div`
  color: #a6afb7;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 18px */
  letter-spacing: -0.3px;
`;

export const Bookmark = styled.img`
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
export const More = styled.div`
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
