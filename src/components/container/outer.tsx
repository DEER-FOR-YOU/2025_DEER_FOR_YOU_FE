import React from 'react';
import * as S from './outer.style';

export default function Outer({ children }: { children: React.ReactNode }) {
  return (
    <S.OuterWrapper>
      <S.OuterWrapper2>
        <S.OuterWrapper3>
          <S.OuterWrapper4>
            <S.OuterContainer>{children}</S.OuterContainer>
          </S.OuterWrapper4>
        </S.OuterWrapper3>
      </S.OuterWrapper2>
    </S.OuterWrapper>
  );
}
