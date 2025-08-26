import React from 'react';
import * as S from './lineUp.style';
import crush from '../../assets/artists/crush.png';
import carder from '../../assets/artists/carder.png';
import sili from '../../assets/artists/sili.png';
import kiki from '../../assets/artists/kiki.png';

const artists9 = [
  {
    name: '크러쉬',
    when: '20:30 ~ 22:00',
    img: crush,
  },
  {
    name: '카더가든',
    when: '22:00 ~ 23:00',
    img: carder,
  },
  {
    name: '실리카겔',
    when: '20:30 ~ 22:00',
    img: sili,
  },
  {
    name: '키키',
    when: '22:00 ~ 23:00',
    img: kiki,
  },
];

export default function LineUp({ currentDate }: { currentDate: string }) {
  // 9일이면 0,1 인덱스, 10일이면 2,3 인덱스
  const startIndex = currentDate === '9' ? 0 : 2;
  const endIndex = currentDate === '9' ? 2 : 4;
  const currentArtists = artists9.slice(startIndex, endIndex);

  return (
    <S.Container>
      <S.Title>라인업</S.Title>
      <S.SubTitle>오늘의 무대를 꾸며줄 아티스트들의 곡을 들어보세요</S.SubTitle>
      <S.ImgContainer>
        {currentArtists.map((artist, index) => (
          <S.ImgBox key={index}>
            <S.Img src={artist.img} alt={artist.name} />
            <S.ImgTextBox>
              <S.ArtistText>{artist.name}</S.ArtistText>
              <S.WhenText>{artist.when}</S.WhenText>
            </S.ImgTextBox>
            <S.ImgOverlay />
          </S.ImgBox>
        ))}
      </S.ImgContainer>
    </S.Container>
  );
}
