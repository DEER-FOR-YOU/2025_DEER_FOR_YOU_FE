export interface CertificationRequest {
  email: string;
}

export interface CertificationVerifyRequest {
  email: string;
  certificationCode: string;
}

export interface MemberRegisterRequest {
  email: string;
  password: string;
  checkPassword: string;
  temporaryToken: string;
}

export interface PasswordChangeRequest {
  email: string;
  temporaryToken: string;
  newPassword: string;
  checkNewPassword: string;
}

export interface CertificationVerifyResponse {
  isVerified: boolean;
  temporaryToken: string;
}
