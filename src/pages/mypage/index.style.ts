import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BlurContainer = styled.div`
  position: absolute;
  top: 3.6rem;
  left: 0;
  right: 0;
  bottom: 8.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(5px);
`;

export const BlurButton = styled.button`
  width: calc(100% - 4rem);
  padding: 1.6rem 0;
  margin-top: 2rem;
  font-weight: 400;

  ${({ theme }) => theme.fonts.neo_dunggeunmo_16};
  color: ${({ theme }) => theme.colors.basic.white};
  background-color: ${({ theme }) => theme.colors.blue.blue40};
`;

export const BlurText = styled.div`
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.mid_black};
  font-weight: 600;
  letter-spacing: -0.04rem;
`;

export const Title = styled.div`
  width: calc(100% - 4rem);
  margin-top: 3.6rem;

  ${({ theme }) => theme.fonts.pretender_14};
  color: ${({ theme }) => theme.colors.basic.mid_dark_gray};
`;

export const MenuSection = styled.div`
  display: flex;
  flex-direction: row;

  width: calc(100% - 4rem);
  margin-top: 2rem;

  align-items: center;
  justify-content: space-between;
`;

export const MenuText = styled.div`
  display: flex;
  flex-direction: row;

  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.mid_black};

  align-items: center;

  img {
  }
`;

export const MenuArrow = styled.img`
  width: 0.9rem;
  height: 1.5rem;
  aspect-ratio: 8.7 / 15.2;
`;

export const HorizontalLine = styled.div`
  width: calc(100% - 4rem);
  border-bottom: 1px solid ${({ theme }) => theme.colors.basic.mid_gray};
  margin-top: 3.6rem;
`;

export const LogOutText = styled.div`
  width: calc(100% - 4rem);
  margin-top: 3.6rem;
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => theme.colors.basic.mid_black};
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0%); }
`;

const slideDown = keyframes`
  from { transform: translateY(0%); }
  to { transform: translateY(100%); }
`;

export const LogOutContainer = styled.div<{ isClosing?: boolean }>`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 200ms ease-out
    both;
  will-change: opacity;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-end;
`;

export const LogOutWrapper = styled.div<{ isClosing?: boolean }>`
  display: flex;
  flex-direction: column;

  width: 100%;

  align-items: center;
  justify-content: center;
  background-color: #fff;

  padding: 3.5rem 2rem;
  border-radius: 1.2rem 1.2rem 0 0;

  gap: 3.6rem;
  transform: translateY(100%);
  animation: ${({ isClosing }) => (isClosing ? slideDown : slideUp)} 200ms
    ease-out both;
  will-change: transform;
  backface-visibility: hidden;
`;

export const LogOutContent = styled.div`
  ${({ theme }) => theme.fonts.pretender_18};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;

  align-items: center;
  justify-content: center;
  gap: 2.2rem;
`;

export const LogOutButton = styled.div<{ type: string }>`
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme, type }) =>
    type === 'cancel'
      ? theme.colors.basic.mid_black
      : theme.colors.basic.white};
  background-color: ${({ theme, type }) =>
    type === 'cancel' ? theme.colors.basic.white : theme.colors.blue.blue40};
  border: 1px solid ${({ theme }) => theme.colors.basic.mid_gray};

  display: flex;
  align-items: center;
  justify-content: center;
  width: 16.4rem;
  height: 4.8rem;
  cursor: pointer;
`;
