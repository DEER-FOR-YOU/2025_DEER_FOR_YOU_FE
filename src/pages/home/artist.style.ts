import styled from '@emotion/styled';

export const Container = styled.div<{ src: string }>`
  /* width: 100%; */
  /* height: 100%; */
  /* aspect-ratio: 1/1; */
  position: relative;
  background-image: url(${({ src }) => src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 32px 0 20px 0;

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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 0 20px;
`;

export const HeaderText = styled.div`
  color: #d2d9df;
  font-family: 'Pretendard';
  font-size: 12px;
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

export const SlideContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  cursor: grab;
  user-select: none;
  touch-action: pan-y;
  overflow: hidden;

  &:active {
    cursor: grabbing;
  }
`;

export const ArtistCardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
`;

export const PrevArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.7) translateX(-20px);
  /* opacity: 0.6; */
  pointer-events: none;
  transition: all 0.3s ease;
  position: relative;
`;

export const CurrentArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(1);
  opacity: 1;
  pointer-events: none;
  transition: all 0.3s ease;
  position: relative;
`;

export const NextArtistCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: scale(0.7) translateX(20px);
  /* opacity: 0.6; */
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

export const ArtistCardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60%;

  pointer-events: none;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.64) 100%
  );
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

export const ArtistName = styled.div`
  position: absolute;
  bottom: 20px;
  left: 18px;
  /* transform: translateX(-50%); */
  color: #fff;
  font-family: 'Pretendard';
  font-size: 1.6rem;
  font-weight: 600;
  pointer-events: none;
  z-index: 3;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

export const ArtistSubtitle = styled.div`
  position: absolute;
  bottom: 45px;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  font-family: 'Pretendard';
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  pointer-events: none;
  z-index: 3;
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
