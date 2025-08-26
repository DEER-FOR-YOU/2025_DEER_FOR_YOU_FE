import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  LostItemCreateRequest,
  LostItemModifyRequest,
  LostItemResponse,
  LostItemDetailResponse,
} from './index.types';

const buildFormData = (
  payload: Record<string, unknown>,
  images?: File[] | null,
): FormData => {
  const form = new FormData();
  form.append(
    'request',
    new Blob([JSON.stringify(payload)], { type: 'application/json' }),
  );

  if (images && images.length > 0) {
    images.forEach((file) => {
      form.append('images', file);
    });
  }

  return form;
};

const getLostItems = ({
  page = 1,
  itemType,
  keyword,
}: {
  page: number;
  itemType?: string | null;
  keyword?: string | null;
}) => {
  return ApiBuilder.create<void, LostItemResponse>('/api/v1/lost-items')
    .setMethod('GET')
    .setParams({ page, itemType, keyword });
};

const getLostItem = (id: number | null) => {
  return ApiBuilder.create<void, LostItemDetailResponse>(
    `/api/v1/lost-items/${id}`,
  ).setMethod('GET');
};

const createLostItem = (
  request: LostItemCreateRequest,
  images?: File[] | null,
) => {
  const form = buildFormData(
    request as unknown as Record<string, unknown>,
    images,
  );

  return ApiBuilder.create<FormData, number>('/api/v1/lost-items')
    .setMethod('POST')
    .setData(form);
};

const updateLostItem = (
  request: LostItemModifyRequest,
  images?: File[] | null,
) => {
  const form = buildFormData(
    request as unknown as Record<string, unknown>,
    images,
  );

  return ApiBuilder.create<FormData, void>('/api/v1/lost-items')
    .setMethod('PUT')
    .setData(form);
};

const deleteLostItem = (id: number) => {
  return ApiBuilder.create<void, void>(`/api/v1/lost-items/${id}`).setMethod(
    'DELETE',
  );
};

export {
  getLostItems,
  getLostItem,
  createLostItem,
  updateLostItem,
  deleteLostItem,
};
