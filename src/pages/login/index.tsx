import React, { useState } from 'react';
import * as S from './index.style';
import Header from '../../components/header';
import InputBox from './components/input/InputBox';
import Button from './components/button/Button';
import { useNavigate } from 'react-router-dom';
import { login } from '../../apis/login';
import { TokenProccesor } from '../../utils/Authorization/TokenProccesor';
import Modal from './components/modal/Modal';
import { useToastContext } from '../../components/toast/Toast';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();
  const isFormValid = email && password;

  const { show } = useToastContext();

  const handleLogin = () => {
    if (isFormValid) {
      login({
        email,
        password,
      })
        .execute()
        .then((response) => {
          TokenProccesor({
            tokenResponse: response.data,
          });
          navigate('/root');
          show('로그인이 완료되었습니다.', 'info', true);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  };

  return (
    <>
      {isError && <Modal setIsError={setIsError} />}
      <S.Container>
        <Header title="로그인" />
        <S.InputWrapper>
          <InputBox
            title="이메일"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputBox
            title="비밀번호"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <Button type="login" disabled={!isFormValid} onClick={handleLogin}>
            로그인
          </Button>
          <Button type="non-login" onClick={() => navigate('/')}>
            로그인 하지않고 둘러보기
          </Button>
        </S.ButtonWrapper>
        <S.NavigationWrapper>
          <S.NavigationText>
            아직 회원이 아닌신가요?{' '}
            <span onClick={() => navigate('/register')}>회원가입</span>
          </S.NavigationText>
          <S.NavigationText>
            비밀번호를 잊으셨나요?{' '}
            <span onClick={() => navigate('/password')}>비밀번호 찾기</span>
          </S.NavigationText>
        </S.NavigationWrapper>
      </S.Container>
    </>
  );
};

export default LoginPage;
