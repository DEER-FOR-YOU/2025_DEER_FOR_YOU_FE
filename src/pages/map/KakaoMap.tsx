import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import * as S from './kakaoMap.style';
import hospital from '../../assets/markers/hospital.svg';
import performance from '../../assets/markers/performance.svg';
import food from '../../assets/markers/food.svg';
import lost from '../../assets/markers/lost.svg';
import toilet from '../../assets/markers/toilet.svg';
import smoke from '../../assets/markers/smoke.svg';
import activity from '../../assets/markers/activity.svg';
import DIY from '../../assets/markers/DIY.svg';

// 마커 데이터 타입 정의
interface MarkerData {
  id: string;
  position?: { lat: number; lng: number }; // 단일 위치
  positions?: { lat: number; lng: number }[]; // 여러 위치
  image: string;
  title: string;
  onClick?: () => void;
}

// 마커 데이터 배열
const MARKERS: MarkerData[] = [
  {
    id: 'hospital',
    position: { lat: 36.833529, lng: 127.180116 },
    image: hospital,
    title: '의무실',
    // onClick: () => alert('병원입니다!'),
  },
  {
    id: 'performance',
    position: { lat: 36.833018, lng: 127.178934 },
    image: performance,
    title: '공연장',
    // onClick: () => alert('공연장입니다!'),
  },
  {
    id: 'food',
    position: { lat: 36.833098, lng: 127.18058 },
    image: food,
    title: '음식',
    // onClick: () => alert('음식점입니다!'),
  },
  {
    id: 'lost',
    position: { lat: 36.833529, lng: 127.180116 },
    image: lost,
    title: '분실물',
    // onClick: () => alert('분실물센터입니다!'),
  },
  {
    id: 'toilet',
    positions: [
      { lat: 36.833529, lng: 127.180116 },
      { lat: 36.832958, lng: 127.181217 },
      { lat: 36.833071, lng: 127.178142 },
      { lat: 36.834209, lng: 127.178855 },
    ],
    image: toilet,
    title: '화장실',
    // onClick: () => alert('화장실입니다!'),
  },
  {
    id: 'smoking',
    positions: [
      { lat: 36.832726, lng: 127.177788 },
      { lat: 36.833395, lng: 127.178121 },
      { lat: 36.83452, lng: 127.178669 },
      { lat: 36.833599, lng: 127.179596 },
      { lat: 36.834034, lng: 127.181243 },
      { lat: 36.833343, lng: 127.1816 },
    ],
    image: smoke,
    title: '흡연구역',
    // onClick: () => alert('흡연구역입니다!'),
  },
  {
    id: 'activity',
    position: { lat: 36.833174, lng: 127.17997 },
    image: activity,
    title: '체험',
  },
  {
    id: 'DIY',
    position: { lat: 36.833213, lng: 127.180241 },
    image: DIY,
    title: 'DIY',
  },
];

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  selectedButton: string;
}

export default function KakaoMap({
  center = { lat: 37.5665, lng: 126.978 },
  zoom = 3,
  selectedButton,
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
            // console.log('카카오맵 초기화 완료');
            setIsLoaded(true);
          });
        } else {
          // 초기화 함수가 없다면 직접 체크
          setIsLoaded(true);
        }
      }
    } catch (error) {
      // console.error('카카오맵 초기화 중 오류:', error);
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
      // console.log('기존 카카오맵 스크립트 발견, 초기화 시도');
      initializeKakaoMap();
      return;
    }

    // 카카오맵 SDK 동적 로드
    const script = document.createElement('script');
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => {
      // console.log('카카오맵 SDK 로드 완료');

      // SDK 초기화를 위한 재시도 로직
      const checkSDKReady = () => {
        if (isSDKReady()) {
          // console.log('카카오맵 SDK 준비 완료');
          initializeKakaoMap();
        } else if (retryCount < 15) {
          // console.log(`SDK 초기화 대기 중... (${retryCount + 1}/15)`);
          setRetryCount((prev) => prev + 1);
          setTimeout(checkSDKReady, 300);
        } else {
          // console.error('카카오맵 SDK 초기화 실패 - 최대 재시도 횟수 초과');
          // 마지막 시도로 초기화 함수 호출
          initializeKakaoMap();
        }
      };

      // 첫 번째 체크 시작
      setTimeout(checkSDKReady, 200);
    };
    script.onerror = () => {
      // console.error('카카오맵 SDK 로드 실패');
    };

    document.head.appendChild(script);
  }, [retryCount]);

  // 선택된 버튼에 따라 마커 필터링
  const filteredMarkers = MARKERS.filter((marker) => {
    if (selectedButton === '전체') return true;

    // 버튼 제목과 마커 제목 매칭
    const buttonTitleMap: { [key: string]: string } = {
      화장실: '화장실',
      음식: '음식',
      체험: '체험',
      분실물: '분실물',
      공연장: '공연장',
      의무실: '의무실',
      흡연구역: '흡연구역',
      DIY: 'DIY',
    };

    return marker.title === buttonTitleMap[selectedButton];
  });

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
          {/* 마커들 렌더링 */}
          {filteredMarkers.map((marker) => {
            // 여러 위치를 가진 마커 (화장실 등)
            if (marker.positions) {
              return marker.positions.map((position, index) => (
                <MapMarker
                  key={`${marker.id}-${index}`}
                  position={position}
                  image={{
                    src: marker.image,
                    size: { width: 32, height: 32 },
                  }}
                  onClick={marker.onClick}
                />
              ));
            }

            // 단일 위치를 가진 마커
            return (
              <MapMarker
                key={marker.id}
                position={marker.position!}
                image={{
                  src: marker.image,
                  size: { width: 32, height: 32 },
                }}
                onClick={marker.onClick}
              />
            );
          })}
        </Map>
      </S.MapWrapper>
    </S.MapContainer>
  );
}
