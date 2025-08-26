import * as S from './index.style';
import { useSearchParams } from 'react-router-dom';
import Header from '../map/Header';
import { useInfiniteBooths } from '../../hooks/useInfiniteBooths';
import BoothCard from './BoothCard';
import ButtonList from './ButtonList';
import ButtonList2 from './ButtonList2';
import { useState } from 'react';
import type { Booth } from '../../types/booth';
import React, { useEffect } from 'react';

export default function BoothsPage() {
  const [searchParams] = useSearchParams();
  const boothlocation = searchParams.get('location');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedAffiliation, setSelectedAffiliation] = useState<string>('');

  // SONG_BAEK_HALL일 때 필터 초기화
  useEffect(() => {
    if (boothlocation === 'SONG_BAEK_HALL') {
      setSelectedType('');
      setSelectedAffiliation('COUNCIL');
    }
    if (boothlocation === 'STUDENT_HALL') {
      setSelectedType('');
      setSelectedAffiliation('');
    }
  }, [boothlocation]);

  const { data, isLoading } = useInfiniteBooths({
    boothLocation: boothlocation || '',
    boothAffiliation: selectedAffiliation,
    boothType: selectedType,
  });

  if (isLoading) return <div></div>;

  return (
    <S.Container>
      <Header title={boothlocation} />
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
      <S.BoothsListContainer>
        {data?.pages.map((page) =>
          page.data.map((booth: Booth) => (
            <BoothCard key={booth.id} booth={booth} />
          )),
        )}
      </S.BoothsListContainer>
    </S.Container>
  );
}
