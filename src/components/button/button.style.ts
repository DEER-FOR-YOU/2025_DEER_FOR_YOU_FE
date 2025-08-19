import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { css as cssType } from '@emotion/react';

export const ButtonWrapper = styled.button<{
  isActive: boolean;
  fullSize: boolean;
}>`
  border-bottom: 2px solid #252528;
  border-right: 2px solid #252528;
  transition: all 0.1s ease;
  ${({ fullSize }) =>
    fullSize &&
    css`
      width: 100%;
      height: 100%;
    `}
  &:active {
    border-bottom: none;
    border-right: none;
    border-top: 2px solid #252528;
    border-left: 2px solid #252528;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: none;
      border-right: none;
      border-top: 2px solid #252528;
      border-left: 2px solid #252528;
    `}
`;

export const ButtonWrapper2 = styled.div<{ isActive: boolean }>`
  border-top: 2px solid rgb(212, 217, 222);
  border-left: 2px solid rgb(212, 217, 222);
  transition: all 0.1s ease;

  &:active {
    border-top: none;
    border-left: none;
    border-bottom: 2px solid rgb(212, 217, 222);
    border-right: 2px solid rgb(212, 217, 222);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-top: none;
      border-left: none;
      border-bottom: 2px solid rgb(212, 217, 222);
      border-right: 2px solid rgb(212, 217, 222);
    `}
`;

export const ButtonWrapper3 = styled.div<{ isActive: boolean }>`
  border-bottom: 2px solid rgb(92, 96, 100);
  border-right: 2px solid rgb(92, 96, 100);
  transition: all 0.1s ease;

  &:active {
    border-bottom: none;
    border-right: none;
    border-top: 2px solid rgb(92, 96, 100);
    border-left: 2px solid rgb(92, 96, 100);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-bottom: none;
      border-right: none;
      border-top: 2px solid rgb(92, 96, 100);
      border-left: 2px solid rgb(92, 96, 100);
    `}
`;

export const ButtonWrapper4 = styled.div<{ isActive: boolean }>`
  border-top: 2px solid white;
  border-left: 2px solid white;
  transition: all 0.1s ease;

  &:active {
    border-top: none;
    border-left: none;
    border-bottom: 2px solid rgb(236, 239, 240);
    border-right: 2px solid rgb(236, 239, 240);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      border-top: none;
      border-left: none;
      border-bottom: 2px solid rgb(236, 239, 240);
      border-right: 2px solid rgb(236, 239, 240);
    `}
`;

export const ButtonContainer = styled.div<{
  isActive: boolean;
  css?: ReturnType<typeof cssType>;
}>`
  background-color: rgb(236, 239, 240);
  color: black;
  transition: all 0.1s ease;
  ${({ css }) => css}

  &:active {
    background-color: rgb(1, 0, 157);
    color: white;

    /* active일 때만 img 태그를 하얀색으로 변환 */
    img {
      filter: brightness(0) invert(1) !important;
    }
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: rgb(1, 0, 157);
      color: white;
    `}
`;
