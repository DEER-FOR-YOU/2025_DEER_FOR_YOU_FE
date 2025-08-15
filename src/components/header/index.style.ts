import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  padding: 0 20px;
`;

export const Arrow = styled.img`
  width: 12px;
  height: 36px;
  cursor: pointer;
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.fonts.pretender_20}
  font-weight: 600;
`;
