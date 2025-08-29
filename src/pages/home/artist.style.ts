import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding: 32px 0 20px 0;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(43, 43, 43, 0.64);
    backdrop-filter: blur(15.943822860717773px);
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

export const BackgroundLayer = styled.div<{ src: string; visible?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.45s ease-in-out;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 20px;
`;

export const HeaderText = styled.div`
  color: #d2d9df;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 16.8px */
  letter-spacing: -0.3px;
`;

export const MainTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MainLeftText = styled.div`
  color: #fff;
  font-family: 'NeoDunggeunmoPro';
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 30.8px */
  letter-spacing: -0.55px;
`;

export const MainRightText = styled.div`
  color: #bec6cd;
  text-align: center;
  font-family: 'Pretendard';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.35px;
  align-self: flex-end;
  cursor: pointer;
  text-decoration: underline;
`;

export const SlideContainer = styled.div<{ isDragging?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
  overflow: ${({ isDragging }) => (isDragging ? 'visible' : 'hidden')};
  position: relative;
  z-index: 1;

  &:active {
    cursor: grabbing;
  }
`;

export const ArtistCardWrapper = styled.div<{ isDragging?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`;

export const PrevArtistCard = styled.div<{ isDragging?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.8);
  pointer-events: none;
  transition: all 0.3s ease;
  background: none;
`;
export const CurrentArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1);
  opacity: 1;
  pointer-events: none;
  transition: all 0.3s ease;
  background: none;
  position: relative;
`;

export const NextArtistCard = styled.div<{ isDragging?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.8);
  pointer-events: none;
  transition: all 0.3s ease;
  position: relative;
`;

export const ArtistImage = styled.img`
  width: 212px;
  height: 264px;
  border-radius: 0;
  object-fit: cover;
  border: none;
  pointer-events: none;
`;

export const ArtistImageWrapper = styled.div`
  width: 212px;
  height: 264px;
  position: relative;
  display: inline-block;
  z-index: 1;
`;

export const ArtistCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  pointer-events: none;
  z-index: 999;

  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000 105%);
`;

export const ArtistCardOverlay2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80%;

  pointer-events: none;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.9) 76.92%
  );
`;

export const ArtistTextContainer = styled.div`
  position: absolute;
  bottom: 20px;
  left: 18px;
  display: flex;
  flex-direction: column;
  z-index: 1000;
`;

export const ArtistName = styled.div`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-weight: 600;
  pointer-events: none;
  z-index: 4; /* Increased z-index to sit above overlay */
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

export const ArtistSubtitle = styled.div`
  color: #fff;
  font-family: 'Pretendard';
  font-size: 2rem;
  font-weight: 600;
  pointer-events: none;
  z-index: 4; /* Increased z-index to sit above overlay */
`;

export const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const Indicator = styled.div<{ isActive: boolean }>`
  width: ${({ isActive }) => (isActive ? '8px' : '4px')};
  height: ${({ isActive }) => (isActive ? '4px' : '4px')};
  border-radius: ${({ isActive }) => (isActive ? '5px' : '50%')};
  background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#7f8992')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({ isActive }) =>
      isActive ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
  }
`;
