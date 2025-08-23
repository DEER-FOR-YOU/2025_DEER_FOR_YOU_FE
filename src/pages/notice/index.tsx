import React from 'react';
import * as S from './index.style';
import Header from '../../components/header';
import NoticeItem from './NoticeItem';
import plus from '../../assets/plus.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { getNotices } from '../../apis/notice';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';

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
  const isAdmin = true; //임시
  const navigate = useNavigate();
  const { data, isLoading } = useApiQuery(getNotices(), ['notice']);

  console.log(data);
  if (isLoading) {
    return <div></div>;
  }

  return (
    <S.Container>
      <Header title="공지사항" />
      <S.NoticeList>
        {data?.map((notice) => (
          <NoticeItem key={notice.id} notice={notice} />
        ))}
      </S.NoticeList>
      {isAdmin && (
        <S.Button
          src={plus}
          alt="plus"
          onClick={() => navigate(ROUTES.NOTICE_POST)}
        />
      )}
    </S.Container>
  );
}
