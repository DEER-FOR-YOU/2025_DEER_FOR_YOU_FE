import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  padding-bottom: 80px;
`;

export const Button = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const TitleContainer = styled.div`
  padding: 0 20px;
  margin-top: 40px;
  margin-bottom: 24px;
`;

export const Title = styled.input`
  width: 100%;
  padding: 12px 16px;
  background-color: #f1f3f5;

  color: #7f8992;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 16px */
  letter-spacing: -0.4px;

  border: none;
  outline: none;
`;

export const SendButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  /* padding: 8px; */
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

export const SendIcon = styled.img``;

export const EditorContainer = styled.div`
  padding: 0 20px;

  /* MDEditor 스타일 커스터마이징 */
  .w-md-editor {
    border: 1px solid #e9ecef;
    border-radius: 8px;
    font-family: Pretendard;
  }

  .w-md-editor-toolbar {
    background-color: #f8f9fa;
    border-bottom: 1px solid #e9ecef;
  }

  .w-md-editor-toolbar-divider {
    background-color: #dee2e6;
  }

  .w-md-editor-toolbar button {
    color: #495057;
  }

  .w-md-editor-toolbar button:hover {
    background-color: #e9ecef;
  }

  .w-md-editor-toolbar button.active {
    background-color: #339af0;
    color: white;
  }
  .w-md-editor-content {
    font-family: Pretendard !important;
  }

  /* 모든 하위 요소에 폰트 강제 적용 */
  .w-md-editor-content * {
    font-family: Pretendard !important;
  }

  /* 특정 태그들에 대한 추가 설정 */
  .w-md-editor-content h1,
  .w-md-editor-content h2,
  .w-md-editor-content h3,
  .w-md-editor-content h4,
  .w-md-editor-content h5,
  .w-md-editor-content h6,
  .w-md-editor-content p,
  .w-md-editor-content span,
  .w-md-editor-content div,
  .w-md-editor-content code,
  .w-md-editor-content pre,
  .w-md-editor-content blockquote,
  .w-md-editor-content li {
    font-family: Pretendard !important;
  }

  /* Preview 영역 스타일링 (noticeItem.style.ts와 동일) */
  .w-md-editor-preview {
    font-family: Pretendard !important;
  }

  .w-md-editor-preview h1 {
    font-family: Pretendard !important;
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 1.5rem 0 1rem 0;
  }

  .w-md-editor-preview h2 {
    font-family: Pretendard !important;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 1.3rem 0 0.8rem 0;
  }

  .w-md-editor-preview h3 {
    font-family: Pretendard !important;
    font-size: 2rem;
    font-weight: 600;
    line-height: 1.3;
    margin: 1.2rem 0 0.7rem 0;
  }

  .w-md-editor-preview h4 {
    font-family: Pretendard !important;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 1.1rem 0 0.6rem 0;
  }

  .w-md-editor-preview h5 {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 1rem 0 0.5rem 0;
  }

  .w-md-editor-preview h6 {
    font-family: Pretendard !important;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.4;
    margin: 0.9rem 0 0.4rem 0;
  }

  .w-md-editor-preview p {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0.8rem 0;
  }

  .w-md-editor-preview span {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }

  .w-md-editor-preview div {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
  }

  .w-md-editor-preview code {
    font-family: Pretendard !important;
    font-size: 1.4rem;
    font-weight: 500;
    background-color: #f8f9fa;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    border: 1px solid #e9ecef;
  }

  .w-md-editor-preview pre {
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

  .w-md-editor-preview blockquote {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
    border-left: 4px solid #339af0;
    padding-left: 1rem;
    margin: 1rem 0;
    color: #495057;
  }

  .w-md-editor-preview li {
    font-family: Pretendard !important;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.6;
    margin: 0.4rem 0;
  }

  .w-md-editor-preview a {
    font-family: Pretendard !important;
    color: #0100a3;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  .w-md-editor-preview a:visited {
    color: #845ef7;
  }
`;
