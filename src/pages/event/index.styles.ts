import styled from '@emotion/styled';

export const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  padding: 0.8rem 0 0.8rem 2rem;

  ${({ theme }) => theme.fonts.neo_dunggeunmo_16};
  font-weight: 400;
  letter-spacing: -0.04rem;

  color: #fff;
  background-color: ${(props) => props.theme.colors.blue.blue40};
  border-bottom: 2px solid #fff;
`;

export const MainImageSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 100%;
  flex-shrink: 0;
  border: none;
`;

export const MainImage = styled.img`
  object-fit: fill;
  aspect-ratio: 390 / 386;
  border: none;
`;

export const MainImageTextSection = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;

  bottom: 0;
  align-items: center;

  width: 100%;
  height: 27.9rem;

  aspect-ratio: 390 / 279;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 63.46%);
  color: white;
`;

export const MainImageTitle = styled.div`
  ${({ theme }) => theme.fonts.pretender_24};
  font-size: 4rem;
  font-weight: 700;
  margin-top: auto;
  margin-bottom: 0.8rem;
`;

export const MainImageText = styled.div`
  ${({ theme }) => theme.fonts.pretender_14};
  font-weight: 500;
  letter-spacing: -0.035rem;
`;

export const MainImagePeriod = styled.div`
  ${({ theme }) => theme.fonts.pretender_14};
  font-weight: 500;
  letter-spacing: -0.035rem;

  margin-top: 1rem;
  margin-bottom: 5rem;
`;
