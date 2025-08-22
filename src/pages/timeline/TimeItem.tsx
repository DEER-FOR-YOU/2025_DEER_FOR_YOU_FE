import React from 'react';
import type { TimeTableItem } from '../../apis/timeline/index.types';
import * as S from './TimeItem.style';
import bookmark from '../../assets/bookmark.svg';

interface TimeItemProps {
  item: TimeTableItem;
}

export default function TimeItem({ item }: TimeItemProps) {
  return (
    <S.Container>
      <S.Header>
        <S.Time>{item.timeDescription}</S.Time>
        <S.Bookmark src={bookmark} alt="bookmark" />
      </S.Header>

      <S.Content>
        <S.Title>{item.title}</S.Title>
        <S.Place>{item.place}</S.Place>
      </S.Content>
    </S.Container>
  );
}
