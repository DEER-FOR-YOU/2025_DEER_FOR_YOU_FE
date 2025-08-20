import styled from '@emotion/styled';
import { css } from '@emotion/react';
import track from '../../assets/scroll/track.png';
import thumb from '../../assets/scroll/thumb.png';

export const Container = styled.div`
  margin-top: 36px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const NoticeHeader = styled.div`
  ${({ theme }) => theme.fonts.pretender_20};
  font-weight: 600;
`;

export const NoticeContainer = styled.div`
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  /* align-items: flex-end; */
`;

export const NoticeList = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  height: 238px;
  overflow-y: scroll;
  scrollbar-gutter: stable;

  /* 스크롤바 항상 표시 */
  &::-webkit-scrollbar {
    width: 28px;
  }

  &::-webkit-scrollbar-track {
    background: url(${track}) repeat top;
  }

  &::-webkit-scrollbar-thumb {
    background-image: url(${thumb});
    background-repeat: no-repeat;
    background-position: top;
    background-size: 120% 110%;
    height: auto;
  }
`;

export const NoticeItem = styled.div<{ isSelected?: boolean }>`
  padding: 16px 14px 16px 12px;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 14px */
  letter-spacing: -0.35px;

  white-space: nowrap; /* 줄바꿈 하지 않음 */
  overflow: hidden; /* 넘치는 부분 숨김 */
  text-overflow: ellipsis; /* ... 으로 표시 */
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: ${({ isSelected }) =>
    isSelected ? '#0100A3' : 'transparent'};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'inherit')};
`;

export const ScrollUpButtonWrapper = styled.div`
  position: absolute;
  top: 24px;
  right: 22px;
`;

export const ScrollDownButtonWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 22px;
`;

export const ScrollButtonImg = styled.img`
  padding: 6px 4px;
`;

export const Button = css`
  padding: 14px 20px;
`;
