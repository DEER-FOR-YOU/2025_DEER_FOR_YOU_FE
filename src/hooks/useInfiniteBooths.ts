import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

export async function getBooths({
  boothLocation,
  boothAffiliation,
  boothType,
  lastBoothId,
}: {
  boothLocation?: string;
  boothAffiliation?: string;
  boothType?: string;
  lastBoothId?: string;
}): Promise<any> {
  const params = new URLSearchParams();

  // undefined가 아닌 값만 쿼리스트링에 추가
  if (boothLocation) params.append('boothLocation', boothLocation);
  if (boothAffiliation) params.append('boothAffiliation', boothAffiliation);
  if (boothType) params.append('boothType', boothType);
  if (lastBoothId) params.append('lastBoothId', lastBoothId);

  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/v1/booths?${params.toString()}`,
  );

  return res;
}

export const useInfiniteBooths = (location: string) => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery({
    queryKey: ['booths', location],
    queryFn: ({ pageParam }) =>
      getBooths({
        boothLocation: location,
        lastBoothId: pageParam.toString(),
      }),
    initialPageParam: 0, // 첫 요청은 lastBoothId = 0
    getNextPageParam: (lastPage) => {
      // 마지막 페이지의 마지막 부스 id를 반환
      if (lastPage.data && lastPage.data.length > 0) {
        const lastBooth = lastPage.data[lastPage.data.length - 1];
        return lastBooth.id;
      }
      return undefined;
    },
  });

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    data,
    isLoading,
  };
};
