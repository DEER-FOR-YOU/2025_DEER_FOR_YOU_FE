import React from 'react';
import * as S from './InputBox.style';

const InputBox = ({
  title,
  placeholder,
  value,
  onChange,
}: {
  title: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  const isPassword = title === '비밀번호';
  return (
    <>
      <S.InputContainer>
        <S.InputText>{title}</S.InputText>
        <S.InputOuter>
          <S.Input
            type={isPassword ? 'password' : 'email'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        </S.InputOuter>
      </S.InputContainer>
    </>
  );
};

export default InputBox;
