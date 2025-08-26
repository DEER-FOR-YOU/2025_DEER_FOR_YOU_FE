import * as S from './index.style';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../map/Header';
import { useInfiniteBooths } from '../../hooks/useInfiniteBooths';
import BoothCard from './BoothCard';
import ButtonList from './ButtonList';
import ButtonList2 from './ButtonList2';
import { useState } from 'react';
import type { Booth } from '../../types/booth';
import React, { useEffect } from 'react';
import SearchBar from '../../components/searchBar';

export default function BoothsPage() {
  const [searchParams] = useSearchParams();
  const boothlocation = searchParams.get('location');
  const keyword = searchParams.get('keyword');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedAffiliation, setSelectedAffiliation] = useState<string>('');
  const [keywordInput, setKeywordInput] = useState<string>('');
  const navigate = useNavigate();
  console.log(keyword);
  console.log(boothlocation);

  // SONG_BAEK_HALL일 때 필터 초기화
  useEffect(() => {
    if (boothlocation === 'SONG_BAEK_HALL') {
      setSelectedType('');
      setSelectedAffiliation('COUNCIL');
      setKeywordInput('');
    }
    if (boothlocation === 'STUDENT_HALL') {
      setSelectedType('');
      setSelectedAffiliation('');
      setKeywordInput('');
    }
    if (boothlocation === null) {
      setSelectedType('');
      setSelectedAffiliation('');
      setKeywordInput('');
    }
  }, [boothlocation]);

  const isLoggedIn = !!sessionStorage.getItem('accessToken');

  const { data, isLoading, ref, isFetchingNextPage, hasNextPage } =
    useInfiniteBooths({
      boothLocation: boothlocation || '',
      boothAffiliation: selectedAffiliation,
      boothType: selectedType,
      isLoggedIn,
      keyword,
    });
  console.log(data);

  if (isLoading) return <div></div>;

  const handleSearchPage = () => {
    navigate(`/booths?keyword=${keywordInput}&location=${boothlocation}`);
  };

  return (
    <S.Container>
      <Header title={boothlocation} />
      <S.SearchBarContainer>
        <SearchBar
          placeholder="부스 / 주점을 검색해보세요"
          value={keywordInput}
          onChange={(e) => setKeywordInput(e.target.value)}
          onClick={handleSearchPage}
        />
      </S.SearchBarContainer>
      {boothlocation && (
        <>
          <ButtonList
            selectedAffiliation={selectedAffiliation}
            setSelectedAffiliation={setSelectedAffiliation}
            setSelectedType={setSelectedType}
            boothlocation={boothlocation}
          />
          {selectedAffiliation !== 'FOOD_TRUCK' &&
            boothlocation !== 'SONG_BAEK_HALL' && (
              <ButtonList2
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />
            )}
        </>
      )}
      <S.BoothsListContainer>
        {data?.pages.map((page) =>
          page.data.map((booth: Booth) => (
            <BoothCard key={booth.id} booth={booth} />
          )),
        )}
        {/* 무한 스크롤을 위한 Intersection Observer 요소 */}
        {hasNextPage && (
          <div ref={ref} style={{ height: '20px', margin: '20px 0' }}>
            {isFetchingNextPage && <div></div>}
          </div>
        )}
      </S.BoothsListContainer>
    </S.Container>
  );
}
