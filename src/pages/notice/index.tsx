import React, { useState } from 'react';
import * as S from './index.style';
import Header from '../../components/header';
import NoticeItem from './NoticeItem';
import plus from '../../assets/plus.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { getNotices, getMember } from '../../apis/notice';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import NoItem from '../../assets/loudspeaker.svg';

export default function NoticePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [expandedNoticeId, setExpandedNoticeId] = useState<number | null>(
    location.state?.expandedNoticeId || null,
  );
  const { data, isLoading } = useApiQuery(getNotices(), ['notice']);
  const { data: member } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });
  if (isLoading) {
    return <div></div>;
  }
  return (
    <S.Container>
      <Header title="공지사항" />
      <S.NoticeList>
        {data && data.length > 0 ? (
          data.map((notice) => (
            <NoticeItem
              key={notice.id}
              notice={notice}
              isAdmin={member?.role === 'ROLE_ADMIN'}
              isExpanded={expandedNoticeId === notice.id}
              onToggle={(id) =>
                setExpandedNoticeId(expandedNoticeId === id ? null : id)
              }
            />
          ))
        ) : (
          <S.NoItemSection>
            <S.NoItemIcon src={NoItem} alt="No Item" />
            <S.NoItemTitle>공지사항 없음</S.NoItemTitle>
            <S.NoItemSubTitle>아직 공지사항이 없습니다.</S.NoItemSubTitle>
          </S.NoItemSection>
        )}
      </S.NoticeList>
      {member?.role === 'ROLE_ADMIN' && (
        <S.Button
          src={plus}
          alt="plus"
          onClick={() => navigate(ROUTES.NOTICE_POST)}
        />
      )}
    </S.Container>
  );
}
