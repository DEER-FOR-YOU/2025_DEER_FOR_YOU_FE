import * as S from './index.style';
import { useSearchParams } from 'react-router-dom';
import Header from '../map/Header';
import { useInfiniteBooths } from '../../hooks/useInfiniteBooths';
import BoothCard from './BoothCard';
import ButtonList from './ButtonList';
import ButtonList2 from './ButtonList2';

export default function BoothsPage() {
  const [searchParams] = useSearchParams();
  const location = searchParams.get('location');

  console.log(location);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useInfiniteBooths(location || '');

  if (isLoading) return <div></div>;

  return (
    <S.Container>
      <Header title={location} />
      <ButtonList />
      <ButtonList2 />
      <S.BoothsListContainer>
        {data?.pages.map((page) =>
          page.data.map((booth: any) => (
            <BoothCard key={booth.id} booth={booth} />
          )),
        )}
      </S.BoothsListContainer>
    </S.Container>
  );
}
