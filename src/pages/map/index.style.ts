import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  /* Header 아래 공간을 지도가 차지하도록 */
  & > div:last-child {
    flex: 1;
    min-height: 0;
  }
`;
