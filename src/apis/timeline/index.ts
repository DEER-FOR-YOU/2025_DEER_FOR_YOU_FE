import ApiBuilder from '../config/builder/ApiBuilder';
import type { TimeTableList } from './index.types';

const getTimelines = (timeTableDay: string) => {
  return ApiBuilder.create<void, TimeTableList>('/api/v1/time-tables')
    .setMethod('GET')
    .setParams({ timeTableDay: timeTableDay });
};

const putTimeLines = (timeTableId: string) => {
  return ApiBuilder.create<void, void>(
    `/api/v1/bookmarks/time-tables/${timeTableId}`,
  ).setMethod('PUT');
};

export { getTimelines, putTimeLines };
