import ApiBuilder from '../config/builder/ApiBuilder';
import type { BoothList } from './index.types';

export const getRandomBooths = () => {
  return ApiBuilder.create<void, BoothList>('/api/v1/booths/random').setMethod(
    'GET',
  );
};
