import React from 'react';
import * as S from './lineUp.style';
import crush from '../../assets/artists/crush.png';
import carder from '../../assets/artists/carder.png';
import sili from '../../assets/artists/sili.png';
import kiki from '../../assets/artists/kiki.png';
import sikgu from '../../assets/artists/sikgu.png';

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
];

const artists10 = [
  {
    name: '실리카겔',
    when: '20:30 ~ 22:00',
    img: sili,
  },
  {
    name: 'KiiiKiii ',
    when: '22:00 ~ 23:00',
    img: kiki,
  },
  {
    name: '식구',
    when: '20:10 ~ 20:30',
    img: sikgu,
  },
];

export default function LineUp({ currentDate }: { currentDate: string }) {
  // 9일이면 artists9 배열, 10일이면 artists10 배열 사용
  const currentArtists = currentDate === '9' ? artists9 : artists10;

  return (
    <S.Container>
      <S.Title>라인업</S.Title>
      <S.SubTitle>오늘의 무대를 꾸며줄 아티스트들의 곡을 들어보세요</S.SubTitle>
      {currentDate === '9' ? (
        <S.ImgContainer9>
          {currentArtists.map((artist, index) => (
            <S.ImgBox1 key={index}>
              <S.Img src={artist.img} alt={artist.name} />
              <S.ImgTextBox>
                <S.ArtistText>{artist.name}</S.ArtistText>
                <S.WhenText>{artist.when}</S.WhenText>
              </S.ImgTextBox>
              <S.ImgOverlay />
            </S.ImgBox1>
          ))}
        </S.ImgContainer9>
      ) : (
        <S.ImgContainer10>
          {currentArtists.map((artist, index) => (
            <S.ImgBox1 key={index}>
              <S.Img src={artist.img} alt={artist.name} />
              <S.ImgTextBox>
                <S.ArtistText>{artist.name}</S.ArtistText>
                <S.WhenText>{artist.when}</S.WhenText>
              </S.ImgTextBox>
              <S.ImgOverlay />
            </S.ImgBox1>
          ))}
        </S.ImgContainer10>
      )}
    </S.Container>
  );
}
