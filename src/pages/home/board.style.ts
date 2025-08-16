import styled from '@emotion/styled';

export const Wrapper = styled.div`
  padding: 0 20px;
  margin: 50px 0;
`;

export const Container = styled.div`
  padding: 7.5px 6px 7.5px 15px;
  background-color: rgb(236, 239, 240);
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  gap: 16px;
`;
export const Title = styled.div`
  color: #000;
  font-family: 'NeoDunggeunmoPro';
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 144%;
  letter-spacing: -0.6px;
`;

export const NumberWrapper = styled.div`
  border-bottom: 1px solid white;
  border-right: 1px solid white;
  flex-grow: 1;
  background: #d2d9df;
`;

export const NumberContainer = styled.div`
  border-left: 1px solid #7f8992;
  border-top: 1px solid #7f8992;
  padding: 6px 8px 4px 0;
  background: rgb(211, 217, 223);
  text-align: end;
`;

export const NumberText = styled.div`
  color: #000;
  font-family: 'NeoDunggeunmoPro';
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.9px;
`;
