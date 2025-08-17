import { css } from '@emotion/react';

export const fonts = css`
  @font-face {
    font-family: 'NeoDunggeunmoPro';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -5%;
    src:
      url(/fonts/NeoDunggeunmoPro-Regular.woff2) format('woff2'),
      url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2302@1.0/NeoDunggeunmoPro-Regular.woff2')
        format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -2.5%;
    src:
      url(/fonts/PretendardVariable.woff2) format('woff2'),
      url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
        format('woff');
    font-display: swap;
  }
`;
