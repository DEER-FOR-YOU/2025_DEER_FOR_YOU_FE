import React, { useState, useEffect } from 'react';
import * as S from './alarm.style';
import alarm from '../../assets/alarm.svg';
import { nineDayArtist, tenDayArtist } from './artist';

export default function Alarm() {
  const [currentArtist, setCurrentArtist] = useState<{
    name: string;
    time: string;
    day: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkCurrentArtist = () => {
      const now = new Date();
      const currentDay = now.toISOString().split('T')[0]; // YYYY-MM-DD 형식
      const currentTime = now.getHours() * 60 + now.getMinutes(); // 분 단위로 변환

      // 모든 아티스트 데이터를 하나의 배열로 합치기
      const allArtists = [...nineDayArtist, ...tenDayArtist];

      // 현재 날짜와 시간에 맞는 아티스트 찾기
      const matchingArtist = allArtists.find((artist) => {
        if (artist.day !== currentDay) return false;

        const [startTime, endTime] = artist.time.split(' ~ ');
        const startHour = parseInt(startTime.split(':')[0]);
        const startMinute = parseInt(startTime.split(':')[1]);
        const endHour = parseInt(endTime.split(':')[0]);
        const endMinute = parseInt(endTime.split(':')[1]);

        const startTimeInMinutes = startHour * 60 + startMinute;
        const endTimeInMinutes = endHour * 60 + endMinute;

        return (
          currentTime >= startTimeInMinutes && currentTime <= endTimeInMinutes
        );
      });

      if (matchingArtist) {
        setCurrentArtist(matchingArtist);
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 초기 체크
    checkCurrentArtist();

    // 1분마다 체크 (시간 변경 감지)
    const interval = setInterval(checkCurrentArtist, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) {
    return null; // display: none 대신 컴포넌트 자체를 렌더링하지 않음
  }

  return (
    <S.AlarmWrapper>
      <S.AlarmContainer>
        <S.AlarmImg src={alarm} alt="alarm" />
        <S.AlarmText>
          <S.AlarmSpan>노천극장</S.AlarmSpan>에서{' '}
          <S.AlarmSpan>{currentArtist?.name}</S.AlarmSpan>의 공연이 진행중이에요
        </S.AlarmText>
      </S.AlarmContainer>
    </S.AlarmWrapper>
  );
}
