import { css } from '@emotion/react';

export const fonts = css`
  @font-face {
    font-family: 'NeoDunggeunmoPro';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -5%;
    src: url(${process.env.PUBLIC_URL}/fonts/NeoDunggeunmoPro-Regular.woff2)
      format('woff2');
    font-display: swap;
  }
  @font-face {
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -2.5%;
    src: url(${process.env.PUBLIC_URL}/fonts/PretendardVariable.woff2)
      format('woff2');
    font-display: swap;
  }
`;
