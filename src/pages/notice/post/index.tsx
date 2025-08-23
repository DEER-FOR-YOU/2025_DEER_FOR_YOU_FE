import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import * as S from './index.style';
import Header from '../../../components/header';
import send from '../../../assets/send.svg';
import { createNotice } from '../../../apis/notice';
import { useApiMutation } from '../../../apis/config/builder/ApiBuilder';
import { useNavigate } from 'react-router-dom';
export default function NoticePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const createNoticeMutation = useApiMutation(createNotice(), {
    onSuccess: () => {
      alert('공지사항이 등록되었습니다.');
      navigate('/notice');
    },
    onError: () => {
      alert('공지사항 등록에 실패했습니다.');
    },
  });

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    createNoticeMutation.mutate({ title, content });
  };

  return (
    <S.Container>
      <Header title="공지사항" />

      {/* 제목 입력 필드 */}
      <S.TitleContainer>
        <S.Title
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </S.TitleContainer>

      {/* 마크다운 에디터 */}
      <S.EditorContainer>
        <MDEditor
          value={content}
          onChange={(val) => setContent(val || '')}
          height={400}
          preview="edit"
          hideToolbar={false}
          data-color-mode="light"
          previewOptions={{
            components: {
              a: ({ href, children, ...props }) => (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </a>
              ),
            },
          }}
        />
      </S.EditorContainer>

      {/* 보내기 버튼 */}
      <S.SendButton onClick={handleSubmit}>
        <S.SendIcon src={send} alt="send" />
      </S.SendButton>
    </S.Container>
  );
}
