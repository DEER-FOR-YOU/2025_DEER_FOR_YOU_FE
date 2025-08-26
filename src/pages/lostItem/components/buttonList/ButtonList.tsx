import React from 'react';
import * as S from './buttonList.style';
import Button from '../../../../components/button/Button';

const BUTTON_LIST = [
  {
    id: 1,
    title: '전체보기',
    constant: null,
  },
  {
    id: 2,
    title: '액세서리',
    constant: 'ACCESSORY',
  },
  {
    id: 3,
    title: '가방',
    constant: 'BAG',
  },
  {
    id: 4,
    title: '귀금속',
    constant: 'METAL',
  },
  {
    id: 5,
    title: '지갑',
    constant: 'WALLET',
  },
  {
    id: 6,
    title: '전자기기',
    constant: 'DEVICE',
  },
  {
    id: 7,
    title: '옷',
    constant: 'CLOTHING',
  },
  {
    id: 8,
    title: '기타',
    constant: 'ETC',
  },
];
interface ButtonListProps {
  selectedButton: string | null;
  onClick: (type: string | null) => void;
}

export default function ButtonList({
  selectedButton,
  onClick,
}: ButtonListProps) {
  return (
    <S.ButtonListContainer>
      {BUTTON_LIST.map((button) => (
        <Button
          key={button.id}
          css={S.Button}
          isActive={selectedButton === button.constant}
          onClick={() => onClick(button.constant)}
        >
          {button.title}
        </Button>
      ))}
    </S.ButtonListContainer>
  );
}
