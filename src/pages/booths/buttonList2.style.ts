import styled from '@emotion/styled';

export const ButtonList2Container = styled.div`
  margin-bottom: 24px;
  padding: 0 20px;

  display: flex;
  gap: 8px;
`;

export const Button = styled.div<{ isActive: boolean }>`
  padding: 8px 10px;
  border: 1px solid ${({ isActive }) => (isActive ? '#000' : '#d2d9df')};

  color: ${({ isActive }) => (isActive ? '#464B50' : '#9fa6ac')};
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.35px;
  cursor: pointer;
`;
