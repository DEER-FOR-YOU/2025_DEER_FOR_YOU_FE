import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const ButtonListContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 10px;
  padding-left: 20px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  display: flex;
  gap: 8px;
  max-width: calc(100% - 20px);
`;

export const Button = css`
  padding: 6px 10px;
`;
