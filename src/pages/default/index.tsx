import React from 'react';
import * as S from './index.style';
import Error from './assets/error.svg';
import Navbar from '../../components/navbar';
import { useNavigate } from 'react-router-dom';

const DefaultPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <S.Container>
        <S.ErrorIcon src={Error} alt="error icon" />
        <S.ErrorTitle>페이지를 찾을 수 없습니다.</S.ErrorTitle>
        <S.ErrorText>
          요청하신 페이지를 찾을 수 없습니다. <br />
          다른 페이지로 이동하시거나, 다시 시도해 주세요.
        </S.ErrorText>
        <S.ErrorButton onClick={() => navigate(-1)}>
          이전 페이지로 이동
        </S.ErrorButton>
      </S.Container>
      <Navbar />
    </>
  );
};

export default DefaultPage;
