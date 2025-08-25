import React from 'react';
import * as S from './Button.style';

type ButtonType = 'util' | 'check';

const Button = ({
  type,
  children,
  disabled,
  onClick,
}: {
  type?: ButtonType;
  children?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  return (
    <S.ButtonContainer buttonType={type} disabled={disabled} onClick={onClick}>
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
