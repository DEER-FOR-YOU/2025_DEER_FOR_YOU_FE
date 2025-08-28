import React, { useEffect, useState, useRef, use } from 'react';
import * as S from './index.style';
import Header from '../../components/header';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getMember } from '../../apis/notice';
import { useNavigate } from 'react-router-dom';

import GuestBlur from './components/GuestBlur';
import MenuRow from './components/MenuRow';
import LogoutModal from './components/LogoutModal';

import Saved from './assets/saved.svg';
import Heart from './assets/heart.svg';
import { useQueryClient } from '@tanstack/react-query';

const MyPage = () => {
  const [isLogin, setIsLogin] = useState<boolean>(
    () => !!sessionStorage.getItem('accessToken'),
  );
  const [isClick, setIsClick] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const closeTimeout = useRef<number | null>(null);
  const blurRef = useRef<HTMLDivElement | null>(null);
  const OVERLAY_ID = 'deerforyou-guest-blur-overlay';
  const { data: memberData } = useApiQuery(getMember(), ['member'], {
    queryKey: ['member'],
    enabled: !!sessionStorage.getItem('accessToken'),
  });

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === 'accessToken') {
        setIsLogin(!!sessionStorage.getItem('accessToken'));
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  useEffect(() => {
    if (!memberData) return;
    if (memberData) {
      setIsLogin(true);
    }
  }, [memberData]);

  const navigateToBooth = () => {
    if (!isLogin) return;
    navigate('/my-page/booth');
  };

  const navigateToTimeline = () => {
    if (!isLogin) return;
    navigate('/my-page/timeline');
  };

  const navigateToAccount = () => {
    if (!isLogin) return;
    navigate('/my-page/account');
  };

  const navigateToAdmin = () => {
    if (!isLogin) return;
    navigate('/my-page/admin');
  };

  const handleLogout = () => {
    queryClient.clear();
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    setIsLogin(false);
  };

  useEffect(() => {
    if (isClick) {
      setIsMounted(true);
      setIsClosing(false);
      return;
    }

    if (isMounted) {
      setIsClosing(true);
      if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
      closeTimeout.current = window.setTimeout(() => {
        setIsMounted(false);
        setIsClosing(false);
      }, 220);
    }

    return () => {
      if (closeTimeout.current) {
        window.clearTimeout(closeTimeout.current);
      }
    };
  }, [isClick, isMounted]);

  return (
    <>
      <Header title="마이페이지" />
      <S.Container>
        {!isLogin && (
          <GuestBlur
            onLoginClick={() => navigate('/login')}
            OVERLAY_ID={OVERLAY_ID}
            blurRef={blurRef}
          />
        )}

        <S.Title>MY</S.Title>
        <MenuRow onClick={navigateToAccount}>내 계정</MenuRow>

        <S.HorizontalLine />
        <S.Title>내 활동</S.Title>

        <MenuRow onClick={navigateToTimeline}>
          <img src={Saved} />
          저장됨
        </MenuRow>

        <MenuRow onClick={navigateToBooth}>
          <img src={Heart} />
          좋아요
        </MenuRow>

        <S.HorizontalLine />

        {memberData?.role === 'ROLE_ADMIN' && (
          <S.LogOutText onClick={navigateToAdmin}>관리자 페이지</S.LogOutText>
        )}

        <S.LogOutText
          onClick={() => {
            setIsClick(true);
          }}
        >
          로그아웃
        </S.LogOutText>
      </S.Container>

      {isMounted && (
        <LogoutModal
          isClosing={isClosing}
          onBackdropClick={() => {
            setIsClosing(true);
            if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
            closeTimeout.current = window.setTimeout(() => {
              setIsMounted(false);
              setIsClick(false);
              setIsClosing(false);
            }, 220);
          }}
          onCancel={() => {
            setIsClosing(true);
            if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
            closeTimeout.current = window.setTimeout(() => {
              setIsMounted(false);
              setIsClick(false);
              setIsClosing(false);
            }, 220);
          }}
          onConfirm={() => {
            handleLogout();
            setIsClosing(true);
            if (closeTimeout.current) window.clearTimeout(closeTimeout.current);
            closeTimeout.current = window.setTimeout(() => {
              setIsMounted(false);
              setIsClick(false);
              setIsClosing(false);
            }, 220);
          }}
        />
      )}
    </>
  );
};

export default MyPage;
