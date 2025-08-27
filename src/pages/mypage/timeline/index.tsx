import React, { useEffect, useRef } from 'react';
import * as S from './index.style';
import TimeItem from '../../../pages/timeline/TimeItem';
import Header from '../../../components/header';
import { useApiQuery } from '../../../apis/config/builder/ApiBuilder';
import { getBookmarkTimelines } from '../../../apis/my';
import { useToastContext } from '../../../components/toast/Toast';
import { useNavigate } from 'react-router-dom';
import { getMember } from '../../../apis/notice';
import Saved from '../assets/graySaved.svg';

const MyTimeLine = () => {
  const { data: timelineData } = useApiQuery(getBookmarkTimelines(), [
    'bookMarkTimeline',
  ]);
  const { data: memberData, isLoading } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });
  const { show } = useToastContext();
  const navigate = useNavigate();

  const shownRef = useRef(false);
  useEffect(() => {
    const hasToken = !!sessionStorage.getItem('accessToken');
    if (shownRef.current) return;

    if (!hasToken) {
      show('로그인 후 이용해주세요.', 'error', true);
      shownRef.current = true;
      navigate('/my-page');
      return;
    }

    if (!isLoading && !memberData) {
      show('로그인 후 이용해주세요.', 'error', true);
      shownRef.current = true;
      navigate('/my-page');
    }
  }, [memberData, isLoading, navigate, show]);

  return (
    <>
      <Header title="저장됨" />
      <S.Container>
        {timelineData?.length === 0 ? (
          <S.NoItemSection>
            <S.NoItemIcon src={Saved} alt="No Item" />
            <S.NoItemTitle>저장 없음</S.NoItemTitle>
            <S.NoItemSubTitle>아직 저장된 콘텐츠가 없습니다.</S.NoItemSubTitle>
          </S.NoItemSection>
        ) : (
          <S.TimeList>
            {timelineData?.map((item) => (
              <TimeItem key={item.timeTableId} item={item} />
            ))}
          </S.TimeList>
        )}
      </S.Container>
    </>
  );
};

export default MyTimeLine;
