import React, { type InputHTMLAttributes } from 'react';
import * as S from './index.style';
import searchIcon from '../../assets/search.svg';

export default function SearchBar({
  onClick,
  setSelectedType,
  setSelectedAffiliation,
  boothlocation,
  ...props
}: {
  onClick?: () => void;
  setSelectedType?: (type: string) => void;
  setSelectedAffiliation?: (affiliation: string) => void;
  boothlocation?: string;
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
                onClick={() => {
                  if (boothlocation === 'SONG_BAEK_HALL') {
                    setSelectedType?.('');
                    setSelectedAffiliation?.('COUNCIL');
                  } else {
                    setSelectedType?.('');
                    setSelectedAffiliation?.('');
                  }
                  onClick?.();
                }}
              />
            </S.SearchBarContainer>
          </S.SearchBarWrapper4>
        </S.SearchBarWrapper3>
      </S.SearchBarWrapper2>
    </S.SearchBarWrapper>
  );
}
