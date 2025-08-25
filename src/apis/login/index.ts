import ApiBuilder from '../config/builder/ApiBuilder';
import type { MemberLoginRequest, TokenResponse } from './index.types';

export const login = ({ email, password }: MemberLoginRequest) => {
  return ApiBuilder.create<MemberLoginRequest, TokenResponse>(
    '/api/v1/members/login',
  )
    .setMethod('POST')
    .setData({ email, password });
};
