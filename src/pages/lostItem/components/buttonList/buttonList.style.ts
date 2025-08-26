import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ButtonListContainer = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  gap: 8px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Button = css`
  padding: 6px 10px;
  white-space: nowrap;
  flex-shrink: 0;

  color: #000;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 16px */
  letter-spacing: -0.8px;
`;
