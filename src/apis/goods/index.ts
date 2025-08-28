import ApiBuilder from '../config/builder/ApiBuilder';

export const getCount = (goodId: number | null) => {
  return ApiBuilder.create<null, number>(`/api/v1/goods/${goodId}`).setMethod(
    'GET',
  );
};
