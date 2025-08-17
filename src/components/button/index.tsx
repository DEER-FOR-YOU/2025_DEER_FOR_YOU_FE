import React from 'react';
import * as S from './index.style';

interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  style2?: React.CSSProperties;
}

export default function Button({ children, style, style2 }: ButtonProps) {
  return (
    <S.Wrapper style={style}>
      <S.Container>
        <S.Main style={style2}>{children}</S.Main>
      </S.Container>
    </S.Wrapper>
  );
}
