import React from 'react';
import Header from '../../components/header';
import Card from './Card';
import * as S from './index.style';
import crush from '../../assets/artists/crush.png';
import carder from '../../assets/artists/carder.png';
import sili from '../../assets/artists/sili.png';
import kiki from '../../assets/artists/kiki.png';
import sikgu from '../../assets/artists/sikgu.png';

const data = [
  {
    title: '9/9일_크러쉬_smu',
    name: '크러쉬',
    img: crush,
    content:
      '크러쉬는 부드러운 보컬과 감각적인 R&B 사운드로 사랑받는 한국의 싱어송라이터이자 프로듀서이다',
    when: '09/09 화요일',
    time: '20시30분',
    place: '노천극장',
  },
  {
    title: '9/9일_카더가든_smu',
    name: '카더가든',
    img: carder,
    content:
      '카더가든은 감성적인 보컬과 서정적인 음악으로 사랑받는 한국의 싱어송라이터이자 인디 뮤지션이다',
    when: '09/09 화요일',
    place: '노천극장',
  },
  {
    title: '9/10일_실리카겔_smu',
    name: '실리카겔',
    img: sili,
    content:
      '실리카겔은 독창적인 사운드와 실험적인 무대로 사랑받는 한국 인디 록 밴드로, 장르의 경계를 넘나드는 음악을 선보인다',
    when: '09/10 수요일',
    place: '노천극장',
  },
  {
    title: '9/10일_KiiiKiii_smu',
    name: 'KiiiKiii',
    img: kiki,
    content:
      'KiiiKiii는 스타십의 5인조 5세대 걸그룹으로, 데뷔곡 "I DO ME"로 자유롭고 당찬 "Gen Z" 매력을 선보이며 빠르게 주목받았다',
    when: '09/10 수요일',
    place: '노천극장',
  },
  {
    title: '9/10일_식구.smu',
    name: '식구',
    img: sikgu,
    content:
      "식구는 AOMG 소속 멀티 플레이어 아티스트로, '팀 토모다치' KR 리믹스 등의 실험적 협업으로 주목받고있다.",
    when: '09/10 수요일',
    place: '노천극장',
  },
];

export default function ArtistPage() {
  return (
    <S.Container>
      <Header title="아티스트" />
      <S.DateBorder>9일</S.DateBorder>
      <Card data={data[0]} marginBottom={36} />
      <Card data={data[1]} marginBottom={60} />
      <S.DateBorder>10일</S.DateBorder>
      <Card data={data[2]} marginBottom={36} />
      <Card data={data[3]} marginBottom={36} />
      <Card data={data[4]} marginBottom={0} />
    </S.Container>
  );
}
