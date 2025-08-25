import React from 'react';
import Button from '../../components/button/Button';
import * as S from './buttonList.style';

interface ButtonListProps {
  selectedAffiliation: string;
  setSelectedAffiliation: (affiliation: string) => void;
  setSelectedType: (type: string) => void;
}

export default function ButtonList({
  selectedAffiliation,
  setSelectedAffiliation,
  setSelectedType,
}: ButtonListProps) {
  const handleTypeClick = (type: string) => {
    setSelectedAffiliation(type);
    if (type === 'FOOD_TRUCK') {
      setSelectedType('');
    }
  };

  return (
    <S.ButtonListContainer>
      <Button
        css={S.Button}
        isActive={selectedAffiliation === ''}
        onClick={() => handleTypeClick('')}
      >
        전체
      </Button>
      <Button
        css={S.Button}
        isActive={selectedAffiliation === 'FOOD_TRUCK'}
        onClick={() => handleTypeClick('FOOD_TRUCK')}
      >
        푸드트럭
      </Button>
      <Button
        css={S.Button}
        isActive={selectedAffiliation === 'CLUB'}
        onClick={() => handleTypeClick('CLUB')}
      >
        동아리
      </Button>
      <Button
        css={S.Button}
        isActive={selectedAffiliation === 'DESIGN'}
        onClick={() => handleTypeClick('DESIGN')}
      >
        디자인
      </Button>
      <Button
        css={S.Button}
        isActive={selectedAffiliation === 'ART'}
        onClick={() => handleTypeClick('ART')}
      >
        예술
      </Button>
      <Button
        css={S.Button}
        isActive={selectedAffiliation === 'ENGINEERING'}
        onClick={() => handleTypeClick('ENGINEERING')}
      >
        공과
      </Button>
      <Button
        css={S.Button}
        isActive={selectedAffiliation === 'CONVERGENCE'}
        onClick={() => handleTypeClick('CONVERGENCE')}
      >
        융합기술
      </Button>
    </S.ButtonListContainer>
  );
}
