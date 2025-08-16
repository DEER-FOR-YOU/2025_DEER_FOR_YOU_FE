import React from 'react';
import * as S from './index.style';

interface ButtonProps {
  children: React.ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Main>{children}</S.Main>
      </S.Container>
    </S.Wrapper>
  );
}
