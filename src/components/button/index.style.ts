import styled from '@emotion/styled';

export const Wrapper = styled.div<{ fullSize?: boolean }>`
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
  background: #7f8992;

  /* width: 100%;
  height: 100%; */
`;

export const Container = styled.div`
  border-bottom: 1px solid #7f8992;
  border-right: 1px solid #7f8992;
  background: #eceff0;
  height: 100%;
  padding-left: 2px;
  padding-top: 2px;
`;

export const Main = styled.div`
  background: #eceff0;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  height: 100%;
`;
