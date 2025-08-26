import React from 'react';
import * as S from './Search.style';
import searchIcon from '../../assets/search.svg';

const Search = ({
  keyword,
  setKeyword,
  handleSearch,
}: {
  keyword: string | undefined;
  setKeyword: (keyword: string | undefined) => void;
  handleSearch: (e?: React.KeyboardEvent<HTMLInputElement> | string) => void;
}) => {
  return (
    <>
      <S.Container>
        <S.SearchOuter>
          <S.Search
            placeholder="분실물 검색"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            onKeyDown={handleSearch}
          />
          <S.SearchIcon
            src={searchIcon}
            alt="Search"
            onClick={() => {
              if (keyword && keyword.trim() !== '') {
                handleSearch(keyword);
              }
            }}
          />
        </S.SearchOuter>
      </S.Container>
    </>
  );
};

export default Search;
