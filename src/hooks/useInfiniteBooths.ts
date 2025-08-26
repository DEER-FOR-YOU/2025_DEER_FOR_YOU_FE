import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
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
  lastBoothId: string;
}): Promise<any> {
  const params = new URLSearchParams();

  // undefined가 아닌 값만 쿼리스트링에 추가
  if (boothLocation) params.append('boothLocation', boothLocation);
  if (boothAffiliation) params.append('boothAffiliation', boothAffiliation);
  if (boothType) params.append('boothType', boothType);
  if (lastBoothId) params.append('lastBoothId', lastBoothId);

  // 세션스토리지에서 토큰 가져오기
  const token = sessionStorage.getItem('accessToken');

  // 헤더 설정
  const headers: Record<string, string> = {};
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/api/v1/booths?${params.toString()}`,
    { headers },
  );

  return res;
}

interface UseInfiniteBoothsProps {
  boothLocation?: string;
  boothAffiliation?: string;
  boothType?: string;
  isLoggedIn: boolean;
}

export const useInfiniteBooths = ({
  boothLocation,
  boothAffiliation,
  boothType,
  isLoggedIn,
}: UseInfiniteBoothsProps) => {
  const { ref, inView } = useInView();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
  } = useInfiniteQuery({
    queryKey: [
      'booths',
      boothLocation,
      boothAffiliation,
      boothType,
      isLoggedIn,
    ],
    queryFn: ({ pageParam }) =>
      getBooths({
        boothLocation,
        boothAffiliation,
        boothType,
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

  // 무한 스크롤 자동 실행
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    data,
    isLoading,
    ref, // Intersection Observer ref 추가
  };
};
