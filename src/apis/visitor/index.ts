import ApiBuilder from '../config/builder/ApiBuilder';

interface Visitor {
  pageView: number;
  uniqueView: number;
  totalPageView: number;
  totalUniqueView: number;
}

const getVisitor = () => {
  return ApiBuilder.create<void, Visitor>('/api/v1/visitors').setMethod('GET');
};

export { getVisitor };
