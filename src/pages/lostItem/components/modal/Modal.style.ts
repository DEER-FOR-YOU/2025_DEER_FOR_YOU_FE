import styled from '@emotion/styled';

export const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
`;

export const ModalOuter = styled.div`
  width: calc(100% - 8rem);
  box-sizing: border-box;
  border-top: 2px solid ${({ theme }) => theme.colors.basic.mid_gray};
  border-left: 2px solid ${({ theme }) => theme.colors.basic.mid_gray};
  border-bottom: 2px solid ${({ theme }) => theme.colors.basic.mid_black};
  border-right: 2px solid ${({ theme }) => theme.colors.basic.mid_black};
`;

export const ModalInner = styled.div`
  width: 100%;
  box-sizing: border-box;
  border-top: 2px solid ${({ theme }) => theme.colors.basic.white};
  border-left: 2px solid ${({ theme }) => theme.colors.basic.white};
  border-bottom: 2px solid ${({ theme }) => theme.colors.basic.mid_dark_gray};
  border-right: 2px solid ${({ theme }) => theme.colors.basic.mid_dark_gray};
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;
  background-color: #eceff0;
  letter-spacing: -0.04rem;
  padding-bottom: 3.5rem;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  align-items: center;
  justify-content: space-between;

  padding: 1.2rem;

  ${({ theme }) => theme.fonts.neo_dunggeunmo_16};
  color: ${({ theme }) => theme.colors.basic.white};
  background-color: ${({ theme }) => theme.colors.blue.blue40};
`;

export const ModalHeaderImage = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  cursor: pointer;
`;

export const ItemImageOuter = styled.div`
  width: calc(100% - 3.2rem);
  aspect-ratio: 28.1 / 25.2;
  margin-top: 1.7rem;
  box-sizing: border-box;
  overflow: hidden;

  border-top: 2px solid ${({ theme }) => theme.colors.basic.dark_gray};
  border-left: 2px solid ${({ theme }) => theme.colors.basic.dark_gray};
  border-bottom: 2px solid ${({ theme }) => theme.colors.basic.white};
  border-right: 2px solid ${({ theme }) => theme.colors.basic.white};
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;

  border-top: 2px solid ${({ theme }) => theme.colors.basic.black};
  border-left: 2px solid ${({ theme }) => theme.colors.basic.black};
  border-bottom: 2px solid ${({ theme }) => theme.colors.basic.mid_gray};
  border-right: 2px solid ${({ theme }) => theme.colors.basic.mid_gray};
`;

export const SlideViewport = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  touch-action: pan-y; /* allow vertical scroll but enable horizontal gestures */
`;

export const SlideTrack = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 300ms ease;
`;

export const Slide = styled.div`
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Indicators = styled.div`
  position: absolute;
  bottom: 0.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.4rem;
`;

export const Indicator = styled.button<{ active?: boolean }>`
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.blue.blue40 : theme.colors.basic.mid_gray};
`;

export const ItemTitle = styled.div`
  display: flex;
  width: calc(100% - 3.2rem);
  margin-top: 1.9rem;
  ${({ theme }) => theme.fonts.pretender_20};
  font-weight: 600;
`;

export const ItemSubDescriptionSection = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - 3.2rem);
  margin-top: 1.2rem;

  gap: 0.5rem;
`;

export const ItemSubDescription = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.8rem;
`;

export const SubTitle = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretender_14};
  color: ${({ theme }) => theme.colors.basic.light_black};
  font-weight: 600;
`;

export const SubDescription = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.pretender_14};
  color: ${({ theme }) => theme.colors.basic.dark_gray};
  font-weight: 400;
`;

export const HorizontalLine = styled.div`
  width: calc(100% - 3.2rem);
  border-top: 2px solid ${({ theme }) => theme.colors.basic.dark_gray};
  border-bottom: 2px solid ${({ theme }) => theme.colors.basic.white};

  margin: 2rem 0;
`;
export const Description = styled.div`
  width: calc(100% - 3.2rem);
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.light_black};
  font-weight: 600;
`;
