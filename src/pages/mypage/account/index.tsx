import React, { useEffect } from 'react';
import * as S from './index.style';
import Header from '../../../components/header';
import { useApiQuery } from '../../../apis/config/builder/ApiBuilder';
import { getMember } from '../../../apis/notice';
import { useNavigate } from 'react-router-dom';
import { useToastContext } from '../../../components/toast/Toast';

const MyAccount = () => {
  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });
  const { show } = useToastContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!memberData) {
      show('로그인 후 이용해주세요.', 'error', true);
      navigate('/my-page');
    }
  }, [memberData]);

  return (
    <>
      <Header title="내 계정" />
      <S.Container>
        <S.Content>
          <S.ContentWrapper>
            <S.LeftText>이메일</S.LeftText>
            <S.RightText>{memberData?.email}</S.RightText>
          </S.ContentWrapper>
          <S.ContentWrapper>
            <S.LeftText>이름</S.LeftText>
            <S.RightText onClick={() => navigate('/my-page/password')}>
              <span>변경하기</span>
            </S.RightText>
          </S.ContentWrapper>
        </S.Content>
      </S.Container>
    </>
  );
};

export default MyAccount;
