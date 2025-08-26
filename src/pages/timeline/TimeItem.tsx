import React, { useState } from 'react';
import type { TimeTableItem } from '../../apis/timeline/index.types';
import * as S from './TimeItem.style';
import bookmark from '../../assets/bookmark.svg';
import bookmark_active from '../../assets/bookmark_active.svg';
import { nineDayClub, tenDayClub } from './club';
import timeImage from '../../assets/when.svg';
import luckyImage from '../../assets/lucky.svg';
import arrowFront from '../../assets/arrow_front.svg';
import { useApiMutation } from '../../apis/config/builder/ApiBuilder';
import { putTimeLines } from '../../apis/timeline';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

interface TimeItemProps {
  item: TimeTableItem;
}

export default function TimeItem({ item }: TimeItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const putTimeLinesMutation = useApiMutation(
    putTimeLines(item.timeTableId.toString()),
    {
      onSuccess: () => {
        // 모든 캐시 삭제
        queryClient.invalidateQueries();
      },
      onError: () => {
        alert('북마크 추가에 실패했습니다.');
      },
    },
  );
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
      <S.Container>
        <S.Header>
          <S.Time>{item.timeDescription}</S.Time>
          <S.Bookmark
            src={item.bookmarked ? bookmark_active : bookmark}
            alt="bookmark"
            onClick={handleBookmarkClick}
          />
        </S.Header>
        <S.Footer>
          <S.Content>
            <S.Title>{item.title}</S.Title>
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
