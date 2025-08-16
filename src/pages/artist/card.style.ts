import styled from '@emotion/styled';

export const CardContainer = styled.div<{ marginBottom: number }>`
  margin-bottom: ${({ marginBottom }) => marginBottom}px;
`;

export const TitleContainer = styled.div`
  padding: 6px 0 6px 20px;
  background-color: #0100a3;
`;

export const Title = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_18}
  color: #fff;
`;

export const ImgContainer = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextContainer = styled.div`
  padding: 50px 40px 20px 20px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 100%);
  position: absolute;
  width: 100%;
  bottom: 0;
`;

export const Name = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_24}
  color: #fff;
  margin-bottom: 16px;
`;

export const Content = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_14}
  color: #fff;
  margin-bottom: 16px;
`;

export const Detail = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_14}
  color: #bec6cd;
`;

export const DetailContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const DetailItem = styled.div`
  ${({ theme }) => theme.fonts.neo_dunggeunmo_14}
  color: #bec6cd;
`;
