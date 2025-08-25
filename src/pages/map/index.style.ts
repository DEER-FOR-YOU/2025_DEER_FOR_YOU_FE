import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: calc(100vh - 74px);
  position: relative;
  /* min-height: 100vh; */
  /* display: flex; */
  /* flex-direction: column; */

  /* Header 아래 공간을 지도가 차지하도록 */
  /* & > div:last-child {
    flex: 1;
    min-height: 0;
  } */

  display: flex;
  flex-direction: column;
`;

export const SearchBarContainer = styled.div`
  padding: 0 20px;
  margin-top: 12px;
`;
