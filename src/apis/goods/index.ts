import ApiBuilder from '../config/builder/ApiBuilder';

interface GoodUpdateRequest {
  goodId: number | null;
  count: number;
}

export const getCount = (goodId: number | null) => {
  return ApiBuilder.create<null, number>(`/api/v1/goods/${goodId}`).setMethod(
    'GET',
  );
};

export const updateGoodsCount = (goodId: number | null, count: number) => {
  return ApiBuilder.create<GoodUpdateRequest, null>(
    `/api/v1/goods/update-count`,
  )
    .setMethod('PUT')
    .setData({ goodId, count });
};
