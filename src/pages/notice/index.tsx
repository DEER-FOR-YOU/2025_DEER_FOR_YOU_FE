import React from 'react';
import * as S from './index.style';
import Header from '../../components/header';
import NoticeItem from './NoticeItem';

const noticeList = [
  {
    id: 1,
    title: '공지사항 1',
    content: '공지사항 1 내용',
    createdAt: '2025-01-01',
  },
  {
    id: 2,
    title: '공지사항 2',
    content: '공지사항 2 내용',
    createdAt: '2025-01-02',
  },
];

export default function NoticePage() {
  return (
    <S.Container>
      <Header title="공지사항" />
      <S.NoticeList>
        {noticeList.map((notice) => (
          <NoticeItem key={notice.id} notice={notice} />
        ))}
      </S.NoticeList>
    </S.Container>
  );
}
