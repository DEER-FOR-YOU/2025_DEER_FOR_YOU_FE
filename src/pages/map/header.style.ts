import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  align-items: center;
  z-index: 1000;
`;

export const Arrow = styled.img`
  width: 12px;
  height: 36px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.pretender_20}
  font-weight: 600;
`;

export const DropdownIcon = styled.img``;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: -1;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  z-index: 2;

  border-radius: 0 0 12px 12px;
  border-top: 1px solid var(--gray-background-gray, #eceff0);
  background: #fff;
  padding: 0 20px;
`;

export const DropdownItem = styled.div<{ isSelected: boolean }>`
  cursor: pointer;
  color: ${({ isSelected }) => (isSelected ? '#000' : '#A6AFB7')};
  font-weight: ${({ isSelected }) => (isSelected ? '600' : '500')};
  font-size: 1.6rem;
  font-style: normal;
  line-height: 150%;
  letter-spacing: -0.4px;
  font-family: Pretendard;
`;

export const HeaderContent = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: white;

  padding: 0 20px;
`;

export const FirstRowLine = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 0;
`;

export const DropDownItemWrapper = styled.div`
  padding: 10px 8px;
  flex-grow: 1;
`;
