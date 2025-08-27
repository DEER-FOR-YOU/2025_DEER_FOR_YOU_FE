import ApiBuilder from '../config/builder/ApiBuilder';
import type { BoothDetail, BoothList } from './index.types';

export const getRandomBooths = () => {
  return ApiBuilder.create<void, BoothList>('/api/v1/booths/random').setMethod(
    'GET',
  );
};

export const getBoothDetail = (id: string | undefined) => {
  return ApiBuilder.create<void, BoothDetail>(`/api/v1/booths/${id}`).setMethod(
    'GET',
  );
};

export const getBookmarkBooth = () => {
  return ApiBuilder.create<void, BoothList>(
    `/api/v1/booths/bookmarks`,
  ).setMethod('GET');
};

export const putBoothItem = (id: string | undefined) => {
  return ApiBuilder.create<void, void>(
    `/api/v1/bookmarks/booths/${id}`,
  ).setMethod('PUT');
};
