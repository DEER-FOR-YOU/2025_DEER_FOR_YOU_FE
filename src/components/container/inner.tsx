import React from 'react';
import * as S from './inner.style';

export default function Inner({ children }: { children: React.ReactNode }) {
  return (
    <S.InnerWrapper>
      <S.InnerWrapper2>
        <S.InnerWrapper3>
          <S.InnerWrapper4>
            <S.InnerContainer>{children}</S.InnerContainer>
          </S.InnerWrapper4>
        </S.InnerWrapper3>
      </S.InnerWrapper2>
    </S.InnerWrapper>
  );
}
