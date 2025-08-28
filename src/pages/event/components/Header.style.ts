import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.3rem 2rem;
  border-bottom: 1px solid var(--gray-background-gray, #eceff0);
  z-index: 1100;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
`;

export const Title = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  ${({ theme }) => theme.fonts.pretender_20}
  font-weight: 600;
  z-index: 10005;
`;

export const Dropdown = styled.div<{ open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;

  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  background: #ffffff;
  border-radius: 0 0 1.2rem 1.2rem;
  padding: 0.4rem 0 1.2rem 0;
  z-index: 10004;
`;

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  gap: 12px 24px;
  width: calc(100% - 4.6rem);
`;

export const MenuItem = styled.div<{ active?: boolean }>`
  ${({ theme }) => theme.fonts.pretender_16}
  color: ${(props) => (props.active ? '#000' : '#A6AFB7')};
  font-weight: ${(props) => (props.active ? 600 : 500)};
  padding: 1rem 0.8rem;
  cursor: pointer;

  justify-self: start;
  text-align: left;

  &:nth-of-type(even) {
    justify-self: flex-start;
    text-align: left;
  }

  &:nth-of-type(odd) {
    justify-self: flex-start;
    text-align: left;
  }
`;

export const BackIcon = styled.img`
  width: 12px;
  height: 36px;
  cursor: pointer;
`;

export const Chevron = styled.img<{ open?: boolean }>`
  position: absolute;
  top: 50%;
  left: calc(50% + 3rem);
  transform: translateY(-50%)
    ${(p) => (p.open ? 'rotate(180deg)' : 'rotate(-180deg)')};
  width: 0.9rem;
  height: 1.3rem;
  transition: transform 140ms ease;
`;
