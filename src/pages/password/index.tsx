import React, { useState } from 'react';
import * as S from './index.style';
import InputBox from './components/input/InputBox';
import Header from '../../components/header';
import Button from './components/button/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  changePassword,
  sendEmail,
  verifyCertificationCode,
} from '../../apis/register';
import useToast from '../../hooks/useToast';

const PasswordPage = () => {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');
  const [certificationCode, setCertificationCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPassword, setCheckNewPassword] = useState('');
  const [temporaryToken, setTemporaryToken] = useState('');

  const isEnabled =
    email && newPassword && temporaryToken && checkNewPassword === newPassword;
  const navigate = useNavigate();
  const { pathname } = useLocation();
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

  const handleChangePassword = () => {
    if (isEnabled) {
      changePassword({ email, temporaryToken, newPassword, checkNewPassword })
        .execute()
        .then(() => {
          show('비밀번호 변경이 완료되었습니다.', 'info');
          pathname === '/password' ? navigate('/login') : navigate('/my-page');
        })
        .catch((err) => {
          if (err.response?.data?.message === '존재하지 않는 회원입니다.') {
            show('존재하지 않는 회원입니다.', 'error');
          } else if (err.response?.data?.message === '잘못된 비밀번호입니다.') {
            show('비밀번호가 올바르지 않습니다.', 'error');
          } else {
            show('비밀번호 변경에 실패했습니다.', 'error');
          }
        });
    }
  };

  return (
    <>
      <S.Container>
        <Header
          title={pathname === '/password' ? '비밀번호 찾기' : '비밀번호 변경'}
        />
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
          {temporaryToken && (
            <>
              <InputBox
                title="새 비밀번호"
                placeholder="특수 문자 2개 이상, 영문, 숫자 포함된 8자~20자 입력"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <InputBox
                title="새 비밀번호 확인"
                placeholder="새 비밀번호 확인"
                value={checkNewPassword}
                onChange={(e) => setCheckNewPassword(e.target.value)}
              />
            </>
          )}
        </S.InputWrapper>
        {temporaryToken && (
          <S.ButtonWrapper>
            <Button
              type="check"
              disabled={!isEnabled}
              onClick={handleChangePassword}
            >
              변경하기
            </Button>
          </S.ButtonWrapper>
        )}
      </S.Container>
    </>
  );
};

export default PasswordPage;
