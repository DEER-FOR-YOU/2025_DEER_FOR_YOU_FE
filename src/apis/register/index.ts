import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  CertificationRequest,
  CertificationVerifyRequest,
  CertificationVerifyResponse,
  MemberRegisterRequest,
  PasswordChangeRequest,
} from './index.types';

export const sendEmail = ({ email }: CertificationRequest) => {
  return ApiBuilder.create<CertificationRequest, void>('/api/v1/certifications')
    .setMethod('POST')
    .setData({ email });
};

export const verifyCertificationCode = ({
  email,
  certificationCode,
}: CertificationVerifyRequest) => {
  return ApiBuilder.create<
    CertificationVerifyRequest,
    CertificationVerifyResponse
  >('/api/v1/certifications/verify')
    .setMethod('POST')
    .setData({ email, certificationCode });
};

export const registerMember = ({
  email,
  password,
  checkPassword,
  temporaryToken,
}: MemberRegisterRequest) => {
  return ApiBuilder.create<MemberRegisterRequest, void>(
    '/api/v1/members/register',
  )
    .setMethod('POST')
    .setData({ email, password, checkPassword, temporaryToken });
};

export const changePassword = ({
  email,
  temporaryToken,
  newPassword,
  checkNewPassword,
}: PasswordChangeRequest) => {
  return ApiBuilder.create<PasswordChangeRequest, void>(
    '/api/v1/members/change-password',
  )
    .setMethod('PUT')
    .setData({ email, temporaryToken, newPassword, checkNewPassword });
};
