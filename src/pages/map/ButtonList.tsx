import React from 'react';
import * as S from './buttonList.style';
import Button from '../../components/button/Button';

const BUTTON_LIST = [
  {
    id: 1,
    title: '전체',
  },
  {
    id: 2,
    title: '화장실',
  },
  {
    id: 3,
    title: '음식',
  },
  {
    id: 4,
    title: '체험',
  },
  {
    id: 5,
    title: '분실물',
  },
  {
    id: 6,
    title: '공연장',
  },
  {
    id: 7,
    title: '의무실',
  },
  {
    id: 8,
    title: '흡연구역',
  },
];
interface ButtonListProps {
  selectedButton: string;
  setSelectedButton: (button: string) => void;
}

export default function ButtonList({
  selectedButton,
  setSelectedButton,
}: ButtonListProps) {
  return (
    <S.ButtonListContainer>
      {BUTTON_LIST.map((button) => (
        <Button
          key={button.id}
          css={S.Button}
          isActive={selectedButton === button.title}
          onClick={() => setSelectedButton(button.title)}
        >
          {button.title}
        </Button>
      ))}
    </S.ButtonListContainer>
  );
}
