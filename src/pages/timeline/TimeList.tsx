import type { TimeTableList } from '../../apis/timeline/index.types';
import * as S from './timeList.style';
import TimeItem from './TimeItem';

interface TimeListProps {
  data: TimeTableList;
}

export default function TimeList({ data }: TimeListProps) {
  return (
    <S.Container>
      <S.Title>타임 테이블</S.Title>
      <S.TimeList>
        {data.map((item) => (
          <TimeItem key={item.timeTableId} item={item} />
        ))}
      </S.TimeList>
    </S.Container>
  );
}
