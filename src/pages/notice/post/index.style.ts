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
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
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
`;
