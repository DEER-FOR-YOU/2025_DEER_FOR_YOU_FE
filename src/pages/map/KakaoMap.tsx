import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './kakaoMap.style';

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
}

export default function KakaoMap({
  center = { lat: 37.5665, lng: 126.978 },
  zoom = 3,
}: KakaoMapProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [retryCount, setRetryCount] = useState(0);

  // SDK가 완전히 초기화되었는지 확인하는 함수
  const isSDKReady = () => {
    try {
      return (
        window.kakao &&
        window.kakao.maps &&
        window.kakao.maps.LatLng &&
        typeof window.kakao.maps.LatLng === 'function' &&
        window.kakao.maps.Map &&
        typeof window.kakao.maps.Map === 'function'
      );
    } catch (error) {
      return false;
    }
  };

  // 카카오맵 초기화 함수
  const initializeKakaoMap = () => {
    try {
      if (window.kakao && window.kakao.maps) {
        // 카카오맵 초기화 함수가 있다면 호출
        if (typeof window.kakao.maps.load === 'function') {
          window.kakao.maps.load(() => {
            console.log('카카오맵 초기화 완료');
            setIsLoaded(true);
          });
        } else {
          // 초기화 함수가 없다면 직접 체크
          setIsLoaded(true);
        }
      }
    } catch (error) {
      console.error('카카오맵 초기화 중 오류:', error);
    }
  };

  useEffect(() => {
    // 카카오맵 SDK가 이미 로드되어 있는지 확인
    if (isSDKReady()) {
      setIsLoaded(true);
      return;
    }

    // 환경변수에서 API 키 가져오기
    const apiKey = process.env.REACT_APP_KAKAOMAP_KEY;

    if (!apiKey) {
      console.error('카카오맵 API 키가 설정되지 않았습니다.');
      return;
    }

    // 이미 스크립트가 로드되어 있는지 확인
    const existingScript = document.querySelector(
      'script[src*="dapi.kakao.com"]',
    );
    if (existingScript) {
      console.log('기존 카카오맵 스크립트 발견, 초기화 시도');
      initializeKakaoMap();
      return;
    }

    // 카카오맵 SDK 동적 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => {
      console.log('카카오맵 SDK 로드 완료');

      // SDK 초기화를 위한 재시도 로직
      const checkSDKReady = () => {
        if (isSDKReady()) {
          console.log('카카오맵 SDK 준비 완료');
          initializeKakaoMap();
        } else if (retryCount < 15) {
          console.log(`SDK 초기화 대기 중... (${retryCount + 1}/15)`);
          setRetryCount((prev) => prev + 1);
          setTimeout(checkSDKReady, 300);
        } else {
          console.error('카카오맵 SDK 초기화 실패 - 최대 재시도 횟수 초과');
          // 마지막 시도로 초기화 함수 호출
          initializeKakaoMap();
        }
      };

      // 첫 번째 체크 시작
      setTimeout(checkSDKReady, 200);
    };
    script.onerror = () => {
      console.error('카카오맵 SDK 로드 실패');
    };

    document.head.appendChild(script);
  }, [retryCount]);

  // SDK가 완전히 로드되고 초기화되었는지 한 번 더 확인
  if (!isLoaded || !isSDKReady()) {
    return (
      <S.MapContainer>
        <S.LoadingMessage>
          <S.LoadingText>
            {retryCount > 0
              ? `지도 초기화 중... (${retryCount}/15)`
              : '지도를 불러오는 중...'}
          </S.LoadingText>
        </S.LoadingMessage>
      </S.MapContainer>
    );
  }

  return (
    <S.MapContainer>
      <S.MapWrapper>
        <Map
          center={center}
          style={{ width: '100%', height: '100%' }}
          level={zoom}
        >
          {/* 상명대학교 위치에 마커 추가 */}
          <MapMarker
            position={{ lat: 37.5665, lng: 126.978 }}
            onClick={() => {
              alert('상명대학교입니다!');
            }}
          />
        </Map>
      </S.MapWrapper>
    </S.MapContainer>
  );
}
