import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 22px 20px;
  border-bottom: 1px solid #d2d9df;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TextFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Title = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 27px */
  letter-spacing: -0.45px;
`;

export const CreatedAt = styled.div`
  color: var(--gray-middarkgray, #a6afb7);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: -0.4px;
`;

export const ArrowDown = styled.img`
  cursor: pointer;
`;

export const ContentConatiner = styled.div`
  border-bottom: 1px solid #d2d9df;
  background: #f1f3f5;
  padding: 34px 20px;

  /* font-size: 1rem; */

  /* ReactMarkdown 내부의 모든 요소에 Pretendard 폰트 적용 */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  div,
  code,
  pre,
  blockquote,
  li {
    font-family: Pretendard !important;
  }

  /* 링크 스타일링 */
  a {
    font-family: Pretendard !important;
    color: #0100a3; /* 파란색 링크 */
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:visited {
    color: #845ef7; /* 방문한 링크는 보라색 */
  }
`;
