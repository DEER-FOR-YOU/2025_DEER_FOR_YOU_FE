import ApiBuilder from '../config/builder/ApiBuilder';
import type { PostNoticeRequest } from './index.types';

const createNotice = () => {
  return ApiBuilder.create<PostNoticeRequest, string>(
    '/api/v1/announcements',
  ).setMethod('POST');
};

export { createNotice };
