import React, { useState } from 'react';
import type { TimeTableItem } from '../../apis/timeline/index.types';
import * as S from './TimeItem.style';
import bookmark from '../../assets/bookmark.svg';
import bookmark_active from '../../assets/bookmark_active.svg';
import { nineDayClub, tenDayClub } from './club';
import timeImage from '../../assets/when.svg';
import luckyImage from '../../assets/lucky.svg';
import arrowFront from '../../assets/arrow_front.svg';
import {
  useApiMutation,
  useApiQuery,
} from '../../apis/config/builder/ApiBuilder';
import { putTimeLines } from '../../apis/timeline';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToastContext } from '../../components/toast/Toast';
import { getMember } from '../../apis/notice';

interface TimeItemProps {
  item: TimeTableItem;
}

// 현재 시간이 해당 시간대에 포함되는지 확인하는 함수
const isCurrentTimeInRange = (
  timeDescription: string,
  date: string,
): boolean => {
  const now = new Date();
  const today = now.toISOString().split('T')[0]; // YYYY-MM-DD 형식

  // 날짜가 오늘이 아니면 false
  if (today !== date) return false;

  // 시간 범위 파싱 (예: "10:00 ~ 22:00")
  const timeMatch = timeDescription.match(
    /(\d{1,2}):(\d{2})\s*~\s*(\d{1,2}):(\d{2})/,
  );
  if (!timeMatch) return false;

  const startHour = parseInt(timeMatch[1]);
  const startMinute = parseInt(timeMatch[2]);
  const endHour = parseInt(timeMatch[3]);
  const endMinute = parseInt(timeMatch[4]);

  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  const currentTimeInMinutes = currentHour * 60 + currentMinute;
  const startTimeInMinutes = startHour * 60 + startMinute;
  const endTimeInMinutes = endHour * 60 + endMinute;

  return (
    currentTimeInMinutes >= startTimeInMinutes &&
    currentTimeInMinutes <= endTimeInMinutes
  );
};

export default function TimeItem({ item }: TimeItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const { show } = useToastContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  // 현재 시간이 해당 시간대에 포함되는지 확인
  const isCurrentTime = isCurrentTimeInRange(
    item.timeDescription,
    item.timeTableDay,
  );

  const putTimeLinesMutation = useApiMutation(
    putTimeLines(item.timeTableId.toString()),
    {
      onSuccess: () => {
        !item.bookmarked
          ? show('북마크 추가에 성공했습니다.', 'info', true)
          : show('북마크 제거에 성공했습니다.', 'info', true);
        queryClient.invalidateQueries();
      },
      onError: () => {
        memberData
          ? show('북마크 추가에 실패했습니다.', 'error', true)
          : show('로그인 후 이용해주세요', 'error', true);
      },
    },
  );

  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });

  const handleMoreClick = () => {
    if ([3, 8, 9].includes(item.timeTableId)) {
      setShowDetails(!showDetails);
    }
  };

  const getClubData = () => {
    if (item.timeTableId === 3) {
      return nineDayClub;
    } else if (item.timeTableId === 8) {
      return tenDayClub;
    }
    return [];
  };

  const handleBookmarkClick = () => {
    putTimeLinesMutation.mutate();
  };

  return (
    <>
      <S.Container isCurrentTime={isCurrentTime}>
        <S.Header>
          <S.Time isCurrentTime={isCurrentTime}>{item.timeDescription}</S.Time>
          <S.Bookmark
            src={item.bookmarked ? bookmark_active : bookmark}
            alt="bookmark"
            onClick={handleBookmarkClick}
          />
        </S.Header>
        <S.Footer>
          <S.Content>
            <S.Title isCurrentTime={isCurrentTime}>{item.title}</S.Title>
            <S.Place>{item.place}</S.Place>
          </S.Content>
          {[3, 8, 9].includes(item.timeTableId) && (
            <S.More onClick={handleMoreClick}>자세히 보기</S.More>
          )}
        </S.Footer>
      </S.Container>
      {showDetails && [3, 8].includes(item.timeTableId) && (
        <S.ClubList>
          {getClubData().map((club, index) => (
            <S.ClubItem key={index}>
              <S.ClubName>{club.name}</S.ClubName>
              <S.TimeContainer>
                <S.TimeImage src={timeImage} alt="time" />
                <S.ClubTime>{club.time}</S.ClubTime>
              </S.TimeContainer>
            </S.ClubItem>
          ))}
        </S.ClubList>
      )}
      {showDetails && [9].includes(item.timeTableId) && (
        <S.LuckyMoreContainer>
          <S.LuckyLeft>
            <S.LuckyImage src={luckyImage} alt="lucky" />
            <S.LuckyText>
              <S.LuckyTitle>행운권 추첨</S.LuckyTitle>
              <S.LuckySubTitle>총학 이벤트 - 상품 증정</S.LuckySubTitle>
            </S.LuckyText>
          </S.LuckyLeft>
          <S.LuckyRight
            src={arrowFront}
            alt="arrow"
            onClick={() => navigate('/events?name=행운권 추첨')}
          />
        </S.LuckyMoreContainer>
      )}
    </>
  );
}
