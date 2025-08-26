import React, { type InputHTMLAttributes } from 'react';
import * as S from './index.style';
import searchIcon from '../../assets/search.svg';

export default function SearchBar({
  onClick,
  ...props
}: {
  onClick?: () => void;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.SearchBarWrapper>
      <S.SearchBarWrapper2>
        <S.SearchBarWrapper3>
          <S.SearchBarWrapper4>
            <S.SearchBarContainer>
              <S.SearchBarInput {...props} />
              <S.SearchBarIcon
                src={searchIcon}
                alt="search"
                onClick={onClick}
              />
            </S.SearchBarContainer>
          </S.SearchBarWrapper4>
        </S.SearchBarWrapper3>
      </S.SearchBarWrapper2>
    </S.SearchBarWrapper>
  );
}
