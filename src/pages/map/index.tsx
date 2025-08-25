import * as S from './index.style';
import Header from '../../components/header';
import KakaoMap from './KakaoMap';
import ButtonList from './ButtonList';
import { useState } from 'react';
import SearchBar from '../../components/searchBar';
import BoothList from './BoothList';

export default function Map() {
  const [selectedButton, setSelectedButton] = useState<string>('전체');

  return (
    <S.Container>
      <Header title="전체지도" />
      <S.SearchBarContainer>
        <SearchBar />
      </S.SearchBarContainer>
      <ButtonList
        selectedButton={selectedButton}
        setSelectedButton={setSelectedButton}
      />
      <KakaoMap
        center={{ lat: 36.833289, lng: 127.178713 }} // 상명대학교 좌표 (실제 좌표로 수정 필요)
        zoom={2}
        selectedButton={selectedButton}
      />
      <BoothList />
    </S.Container>
  );
}
