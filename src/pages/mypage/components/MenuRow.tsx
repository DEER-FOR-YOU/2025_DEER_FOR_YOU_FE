import React from 'react';
import * as S from '../index.style';
import Arrow from '../assets/arrow.svg';

type Props = {
  onClick?: () => void;
  children?: React.ReactNode;
};

const MenuRow: React.FC<Props> = ({ onClick, children }) => {
  return (
    <S.MenuSection onClick={onClick}>
      <S.MenuText>{children}</S.MenuText>
      <S.MenuArrow src={Arrow} alt="arrow" />
    </S.MenuSection>
  );
};

export default MenuRow;
