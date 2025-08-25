import React, { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import Header from '../../../components/header';
import send from '../../../assets/send.svg';

import { useNavigate, useParams } from 'react-router-dom';
import { getNotice } from '../../../apis/notice';
import { useApiQuery } from '../../../apis/config/builder/ApiBuilder';
import * as S from '../post/index.style';
import { useApiMutation } from '../../../apis/config/builder/ApiBuilder';
import { updateNotice } from '../../../apis/notice';
import { useQueryClient } from '@tanstack/react-query';

export default function NoticeEditPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { data, isLoading } = useApiQuery(getNotice(Number(id)), [
    'notice',
    id,
  ]);
  const updateNoticeMutation = useApiMutation(updateNotice(), {
    onSuccess: () => {
      alert('공지사항이 수정되었습니다.');
      navigate('/notice');
      queryClient.invalidateQueries({ queryKey: ['notice'] });
      queryClient.invalidateQueries({ queryKey: ['notice', id] });
    },
    onError: () => {
      alert('공지사항 수정에 실패했습니다.');
    },
  });
  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
    }
  }, [data]);
  if (isLoading) {
    return <div></div>;
  }

  const handleSubmit = () => {
    updateNoticeMutation.mutate({
      announcementId: Number(id),
      title,
      content,
    });
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
