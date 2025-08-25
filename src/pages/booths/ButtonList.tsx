import React from 'react';
import Button from '../../components/button/Button';
import * as S from './buttonList.style';

interface ButtonListProps {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

export default function ButtonList({
  selectedType,
  setSelectedType,
}: ButtonListProps) {
  const handleTypeClick = (type: string) => {
    setSelectedType(type);
  };

  return (
    <S.ButtonListContainer>
      <Button
        css={S.Button}
        isActive={selectedType === ''}
        onClick={() => handleTypeClick('')}
      >
        전체
      </Button>
      <Button
        css={S.Button}
        isActive={selectedType === 'FOOD_TRUCK'}
        onClick={() => handleTypeClick('FOOD_TRUCK')}
      >
        푸드트럭
      </Button>
      <Button
        css={S.Button}
        isActive={selectedType === 'CLUB'}
        onClick={() => handleTypeClick('CLUB')}
      >
        동아리
      </Button>
      <Button
        css={S.Button}
        isActive={selectedType === 'DESIGN'}
        onClick={() => handleTypeClick('DESIGN')}
      >
        디자인
      </Button>
      <Button
        css={S.Button}
        isActive={selectedType === 'ART'}
        onClick={() => handleTypeClick('ART')}
      >
        예술
      </Button>
      <Button
        css={S.Button}
        isActive={selectedType === 'ENGINEERING'}
        onClick={() => handleTypeClick('ENGINEERING')}
      >
        공과
      </Button>
      <Button
        css={S.Button}
        isActive={selectedType === 'CONVERGENCE'}
        onClick={() => handleTypeClick('CONVERGENCE')}
      >
        융합기술
      </Button>
    </S.ButtonListContainer>
  );
}
