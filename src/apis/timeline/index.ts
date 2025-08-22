import ApiBuilder from '../config/builder/ApiBuilder';
import type { TimeTableList } from './index.types';

const getTimelines = (timeTableDay: string) => {
  return ApiBuilder.create<void, TimeTableList>('/api/v1/time-tables')
    .setMethod('GET')
    .setParams({ timeTableDay: timeTableDay });
};

export { getTimelines };
