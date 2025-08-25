import React, { useState } from 'react';
import * as S from './index.style';
import InputBox from './components/input/InputBox';
import Header from '../../components/header';
import Button from './components/button/Button';
import { useNavigate } from 'react-router-dom';
import {
  registerMember,
  sendEmail,
  verifyCertificationCode,
} from '../../apis/register';
import useToast from '../../hooks/useToast';

const RegisterPage = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [certificationCode, setCertificationCode] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [temporaryToken, setTemporaryToken] = useState('');

  const isEnabled =
    email && password && temporaryToken && checkPassword === password;
  const navigate = useNavigate();
  const { show } = useToast();

  const handleSendEmail = () => {
    sendEmail({ email })
      .execute()
      .then(() => {
        show('인증 코드를 전송했습니다.', 'info');
      })
      .catch(() => {
        show('이메일 전송에 실패했습니다.', 'error');
      });
  };

  const handleVerifyCertificationCode = () => {
    verifyCertificationCode({ email, certificationCode })
      .execute()
      .then((res) => {
        setTemporaryToken(res.data.temporaryToken);
        setText('인증되었습니다.');
      })
      .catch(() => {
        setText('인증코드가 올바르지 않습니다.');
      });
  };

  const handleRegister = () => {
    if (isEnabled) {
      registerMember({ email, password, checkPassword, temporaryToken })
        .execute()
        .then(() => {
          show('회원가입이 완료되었습니다.', 'info');
          navigate('/login');
        })
        .catch((err) => {
          if (err.response?.data?.message === '이미 존재하는 회원입니다.') {
            show('이미 가입된 이메일입니다.', 'error');
          } else if (err.response?.data?.message === '잘못된 비밀번호입니다.') {
            show('비밀번호가 올바르지 않습니다.', 'error');
          } else {
            show('회원가입에 실패했습니다.', 'error');
          }
        });
    }
  };

  return (
    <>
      <S.Container>
        <Header title="회원가입" />
        <S.InputWrapper>
          <InputBox
            title="이메일 계정"
            placeholder="이메일 주소 입력"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            rightButton={{
              label: '발송',
              onClick: handleSendEmail,
              disabled: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
            }}
          />
          <InputBox
            title="인증코드"
            placeholder="인증코드 입력"
            value={certificationCode}
            onChange={(e) => setCertificationCode(e.target.value)}
            rightButton={{
              label: '인증',
              onClick: handleVerifyCertificationCode,
              disabled: !certificationCode,
              text: text,
            }}
          />
          <InputBox
            title="비밀번호"
            placeholder="특수 문자 2개 이상, 영문, 숫자 포함된 8자~20자 입력"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <InputBox
            title="비밀번호 확인"
            placeholder="비밀번호 확인"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <Button type="check" disabled={!isEnabled} onClick={handleRegister}>
            회원가입
          </Button>
        </S.ButtonWrapper>
        <S.NavigationWrapper>
          <S.NavigationText>
            이미 계정이 있으신가요?{' '}
            <span onClick={() => navigate('/login')}>로그인</span>
          </S.NavigationText>
        </S.NavigationWrapper>
      </S.Container>
    </>
  );
};

export default RegisterPage;
