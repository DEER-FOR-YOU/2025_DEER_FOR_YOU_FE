import styled from '@emotion/styled';

export const Wrapper = styled.div<{ background: string }>`
  /* height: 180px; */
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #010089 0%, rgba(1, 0, 137, 0) 100%);
  padding: 21px 21px 34px 21px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;
export const Title = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_18};
  color: #fff;
`;
export const SubTitle = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_12};
  color: #eceff0;
`;

export const Button = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(10px);
  cursor: pointer;
  padding: 12px 16px;
  ${({ theme }) => theme.fonts.neo_dunggeunmo_14};
  color: #fff;
`;
