import React from 'react';
import * as S from './buttonList2.style';

interface ButtonList2Props {
  selectedType: string;
  setSelectedType: (type: string) => void;
}

export default function ButtonList2({
  selectedType,
  setSelectedType,
}: ButtonList2Props) {
  const handleAffiliationClick = (affiliation: string) => {
    setSelectedType(affiliation);
  };
  return (
    <S.ButtonList2Container>
      <S.Button
        onClick={() => handleAffiliationClick('FOOD')}
        isActive={selectedType === 'FOOD'}
      >
        음식만보기
      </S.Button>
      <S.Button
        onClick={() => handleAffiliationClick('DIY')}
        isActive={selectedType === 'DIY'}
      >
        DIY만보기
      </S.Button>
      <S.Button
        onClick={() => handleAffiliationClick('ACTIVITY')}
        isActive={selectedType === 'ACTIVITY'}
      >
        체험만보기
      </S.Button>
    </S.ButtonList2Container>
  );
}
