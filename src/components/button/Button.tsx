import React from 'react';
import * as S from './button.style';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import type { css as cssType } from '@emotion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  css?: ReturnType<typeof cssType>;
  fullSize?: boolean;
}

export default function Button({
  children,
  isActive = false,
  type = 'button',
  css,
  fullSize = false,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <S.ButtonWrapper
      isActive={isActive}
      type={type}
      fullSize={fullSize}
      {...props}
    >
      <S.ButtonWrapper2 isActive={isActive}>
        <S.ButtonWrapper3 isActive={isActive}>
          <S.ButtonWrapper4 isActive={isActive}>
            <S.ButtonContainer isActive={isActive} css={css}>
              {children}
            </S.ButtonContainer>
          </S.ButtonWrapper4>
        </S.ButtonWrapper3>
      </S.ButtonWrapper2>
    </S.ButtonWrapper>
  );
}
