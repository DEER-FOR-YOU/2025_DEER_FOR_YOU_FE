import styled from '@emotion/styled';
import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

const borderBottom = css`
  border-bottom: 1px solid #d2d9df;
`;

const fontPretender12 = (theme: Theme) => css`
  ${theme.fonts.pretender_12};
  font-size: 13px;
`;

const fontPretender14 = (theme: Theme) => css`
  ${theme.fonts.pretender_14};
`;

const color = {
  dark: (theme: Theme) => theme.colors.basic.dark_gray,
  midDark: (theme: Theme) => theme.colors.basic.mid_dark_gray,
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;

export const Title = styled.div`
  display: flex;
  width: calc(100% - 4rem);
  ${({ theme }) => theme.fonts.pretender_16};
  color: ${({ theme }) => color.dark(theme)};
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  border: none;
  ${borderBottom};
  padding: 0.5rem 0;

  ${(props) => fontPretender12(props.theme)}
  color: ${(props) => color.dark(props.theme)};

  &:focus {
    outline: none;
  }

  &::placeholder {
    ${(props) => fontPretender12(props.theme)}
    color: ${(props) => color.midDark(props.theme)};
  }
`;

export const PickerWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const PickerInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: none;
  ${borderBottom};
  padding: 0.5rem 0;
  cursor: pointer;

  ${(props) => fontPretender12(props.theme)}
  color: ${(props) => color.midDark(props.theme)};

  &:focus {
    outline: none;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.25rem);
  left: 0;
  width: 100%;
  border: 1px solid #d2d9df;
  background: #fff;
  max-height: 20rem;
  overflow-y: auto;
  z-index: 20;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const DropdownItem = styled.div<{ selected?: boolean }>`
  padding: 1.7rem 1rem;
  ${(props) => fontPretender14(props.theme)}
  color: ${(props) => color.dark(props.theme)};
  background: ${({ selected }) => (selected ? '#f1f3f5' : '#FFF')};
  font-weight: ${({ selected }) => (selected ? 700 : 400)};

  &:hover {
    background: #f1f3f5;
  }
`;

export const DateRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  ${borderBottom};
  padding: 0.5rem 0;
  cursor: pointer;
`;

export const DateText = styled.div`
  ${(props) => fontPretender12(props.theme)}
  color: ${(props) => color.dark(props.theme)};
`;

export const DatePlaceholder = styled.div`
  ${(props) => fontPretender12(props.theme)}
  color: ${(props) => color.midDark(props.theme)};
`;

export const DateIcon = styled.img`
  width: 18px;
  height: 18px;
  margin-left: 0.5rem;
`;

export const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  pointer-events: auto; /* iOS에서 실제 입력에 터치가 가도록 허용 */
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  border: 0;
`;
