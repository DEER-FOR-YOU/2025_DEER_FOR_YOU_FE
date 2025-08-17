import styled from '@emotion/styled';

export const SloganContainer = styled.div`
  padding: 11px 0;
  background-color: #7f8992;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
`;

export const SloganWrapper = styled.div`
  display: inline-flex;
  animation: scroll-left 20s linear infinite;

  @keyframes scroll-left {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const Slogan = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_12}
  color: #fff;
  white-space: nowrap;
  margin-right: 50px;
`;
