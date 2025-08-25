import type { TokenResponse } from '../../apis/login/index.types';

const TokenProccesor = ({
  tokenResponse,
}: {
  tokenResponse: TokenResponse;
}) => {
  if (tokenResponse.accessToken && tokenResponse.refreshToken) {
    sessionStorage.setItem('accessToken', tokenResponse.accessToken);
    sessionStorage.setItem('refreshToken', tokenResponse.refreshToken);
  }
};

export { TokenProccesor };
