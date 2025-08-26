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
