import React from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/header';
import banner from '../../assets/banner.svg';
import * as S from './index.style';
import Button from '../../components/button/Button';
import LineUp from './LineUp';
import { getTimelines } from '../../apis/timeline';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getFullDate } from '../../utils/getFullDate';
import TimeList from './TimeList';

export default function Timeline() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentDate = searchParams.get('date') || '9'; // 기본값은 9일

  const { data, isLoading } = useApiQuery(
    getTimelines(getFullDate(Number(currentDate))),
    ['timeline', currentDate],
  );

  const handleDateChange = (date: string) => {
    setSearchParams({ date });
  };

  if (isLoading) {
    return <div></div>;
  }

  return (
    <S.Container>
      <Header title="축제 일정" />
      <S.Banner src={banner} alt="banner" />
      <S.DateButtonContainer>
        <Button
          fullSize
          css={S.ButtonCS}
          isActive={currentDate === '9'}
          onClick={() => handleDateChange('9')}
        >
          9일
        </Button>
        <Button
          fullSize
          css={S.ButtonCS}
          isActive={currentDate === '10'}
          onClick={() => handleDateChange('10')}
        >
          10일
        </Button>
      </S.DateButtonContainer>
      <LineUp currentDate={currentDate} />
      <TimeList data={data!} />
    </S.Container>
  );
}
