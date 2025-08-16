import styled from '@emotion/styled';

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 550px;
  bottom: 0;
  padding: 8.5px 0;
  display: flex;
  background-color: #fff;
  border-top: 1px solid #d2d9df;
`;
export const NavbarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  flex-grow: 1;
`;

export const ItemText = styled.span`
  color: #9fa6ac;
  ${({ theme }) => theme.fonts.neo_dunggeunmo_18}
`;
