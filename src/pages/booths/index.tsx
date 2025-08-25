import * as S from './index.style';
import { useSearchParams } from 'react-router-dom';
import Header from '../map/Header';
import { useInfiniteBooths } from '../../hooks/useInfiniteBooths';
import BoothCard from './BoothCard';
import ButtonList from './ButtonList';
import ButtonList2 from './ButtonList2';
import { useState } from 'react';
import type { Booth } from '../../types/booth';

export default function BoothsPage() {
  const [searchParams] = useSearchParams();
  const boothlocation = searchParams.get('location');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedAffiliation, setSelectedAffiliation] = useState<string>('');

  const { data, isLoading } = useInfiniteBooths({
    boothLocation: boothlocation || '',
    boothAffiliation: selectedType,
    boothType: selectedAffiliation,
  });

  if (isLoading) return <div></div>;

  return (
    <S.Container>
      <Header title={boothlocation} />
      <ButtonList
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <ButtonList2 />
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
