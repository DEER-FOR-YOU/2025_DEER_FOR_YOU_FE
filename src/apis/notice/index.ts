import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  PostNoticeRequest,
  NoticeList,
  Member,
  Notice,
  UpdateNoticeRequest,
} from './index.types';

const createNotice = () => {
  return ApiBuilder.create<PostNoticeRequest, string>(
    '/api/v1/announcements',
  ).setMethod('POST');
};

const deleteNotice = (id: number) => {
  return ApiBuilder.create<void, void>(`/api/v1/announcements/${id}`).setMethod(
    'DELETE',
  );
};

const getNotices = () => {
  return ApiBuilder.create<void, NoticeList>('/api/v1/announcements').setMethod(
    'GET',
  );
};

const getNotice = (id: number) => {
  return ApiBuilder.create<void, Notice>(
    `/api/v1/announcements/${id}`,
  ).setMethod('GET');
};

const updateNotice = () => {
  return ApiBuilder.create<UpdateNoticeRequest, void>(
    `/api/v1/announcements`,
  ).setMethod('PUT');
};

const getMember = () => {
  return ApiBuilder.create<void, Member>('/api/v1/members').setMethod('GET');
};

export {
  createNotice,
  getNotices,
  getMember,
  deleteNotice,
  getNotice,
  updateNotice,
};
