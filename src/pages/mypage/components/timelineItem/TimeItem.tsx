import React, { useState } from 'react';
import type { TimeTableItem } from '../../../../apis/timeline/index.types';
import * as S from './TimeItem.style';
import bookmark from '../../assets/bookmark.svg';
import bookmark_active from '../../assets/bookmark_active.svg';
import { nineDayClub, tenDayClub } from '../../../timeline/club';
import timeImage from '../../assets/when.svg';
import luckyImage from '../../assets/lucky.svg';
import arrowFront from '../../assets/arrow_front.svg';
import {
  useApiMutation,
  useApiQuery,
} from '../../../../apis/config/builder/ApiBuilder';
import { putTimeLines } from '../../../../apis/timeline';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { useToastContext } from '../../../../components/toast/Toast';
import { getMember } from '../../../../apis/notice';

interface TimeItemProps {
  item: TimeTableItem;
}

export default function TimeItem({ item }: TimeItemProps) {
  const [showDetails, setShowDetails] = useState(false);
  const { show } = useToastContext();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const putTimeLinesMutation = useApiMutation(
    putTimeLines(item.timeTableId.toString()),
    {
      onSuccess: () => {
        show('북마크가 삭제되었습니다.', 'info', true);
        queryClient.invalidateQueries();
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
