import styled from '@emotion/styled';

// 슬라이딩 기능을 위한 래퍼
export const NoticeItemWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

// 액션 버튼들 (편집/삭제)
export const ActionButtons = styled.div<{ isVisible: boolean }>`
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

// 편집 버튼
export const EditButton = styled.div`
  width: 100px;
  height: 100%;
  background-color: #0ea5e6;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

// 편집 아이콘
export const EditIcon = styled.img``;

// 삭제 버튼
export const DeleteButton = styled.div`
  width: 100px;
  height: 100%;
  background-color: #f00;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

// 삭제 아이콘
export const DeleteIcon = styled.img``;

//
export const Container = styled.div`
  padding: 22px 20px;
  border-bottom: 1px solid #d2d9df;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  position: relative;
  z-index: 1;
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
  h1 {
    font-family: Pretendard !important;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.5rem 0 1rem 0;
  }

  h2 {
    font-family: Pretendard !important;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 1.3rem 0 0.8rem 0;
  }

  h3 {
    font-family: Pretendard !important;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 1.2rem 0 0.7rem 0;
  }

  h4 {
    font-family: Pretendard !important;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 1.1rem 0 0.6rem 0;
  }

  h5 {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 1rem 0 0.5rem 0;
  }

  h6 {
    font-family: Pretendard !important;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0.9rem 0 0.4rem 0;
  }

  p {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0.8rem 0;
  }

  span {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }

  div {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }

  code {
    font-family: Pretendard !important;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    border: 1px solid #e9ecef;
  }

  pre {
    font-family: Pretendard !important;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #e9ecef;
    overflow-x: auto;
    margin: 1rem 0;
  }

  blockquote {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
    border-left: 4px solid #339af0;
    padding-left: 1rem;
    margin: 1rem 0;
    color: #495057;
  }

  li {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0.4rem 0;
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
