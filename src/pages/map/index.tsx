import React from 'react';
import * as S from './index.style';
import Header from '../../components/header';
import KakaoMap from './KakaoMap';

export default function Map() {
  return (
    <S.Container>
      <Header title="전체지도" />
      <KakaoMap
        center={{ lat: 36.833289, lng: 127.178713 }} // 상명대학교 좌표 (실제 좌표로 수정 필요)
        zoom={2}
      />
    </S.Container>
  );
}
