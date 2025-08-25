import React from 'react';
import * as S from './InputBox.style';
import Button from '../../components/button/Button';

type RightButton = {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
};

const InputBox = ({
  title,
  placeholder,
  value,
  onChange,
  rightButton,
}: {
  title: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightButton?: RightButton;
}) => {
  const isPassword = title === '새 비밀번호' || title === '새 비밀번호 확인';
  const isEmail = title === '이메일 계정';
  const defaultLabel = isEmail ? '발송' : '인증';

  return (
    <>
      <S.InputContainer>
        <S.InputText>
          {title}&nbsp;&nbsp; <span>{rightButton?.text}</span>
        </S.InputText>
        <S.InputWrapper>
          <S.InputOuter>
            <S.Input
              type={isPassword ? 'password' : 'text'}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </S.InputOuter>
          {!isPassword && (
            <Button
              type="util"
              onClick={rightButton?.onClick}
              disabled={rightButton?.disabled}
            >
              {rightButton?.label ?? defaultLabel}
            </Button>
          )}
        </S.InputWrapper>
      </S.InputContainer>
    </>
  );
};

export default InputBox;
