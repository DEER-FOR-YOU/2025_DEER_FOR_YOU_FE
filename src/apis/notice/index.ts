import ApiBuilder from '../config/builder/ApiBuilder';
import type { PostNoticeRequest, NoticeList, Member } from './index.types';

const createNotice = () => {
  return ApiBuilder.create<PostNoticeRequest, string>(
    '/api/v1/announcements',
  ).setMethod('POST');
};

const getNotices = () => {
  return ApiBuilder.create<void, NoticeList>('/api/v1/announcements').setMethod(
    'GET',
  );
};

const getMember = () => {
  return ApiBuilder.create<void, Member>('/api/v1/members').setMethod('GET');
};

export { createNotice, getNotices, getMember };
