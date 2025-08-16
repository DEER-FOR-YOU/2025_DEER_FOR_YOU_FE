import * as S from './artist.style';
import crush from '../../assets/artists/crush.png';
import carder from '../../assets/artists/carder.png';
import sili from '../../assets/artists/sili.png';
import kiki from '../../assets/artists/kiki.png';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

const artists = [
  {
    id: 1,
    name: '크러쉬',
    subtitle: 'CRUSH',
    image: crush,
  },
  {
    id: 2,
    name: '카더가든',
    subtitle: 'CARDER',
    image: carder,
  },
  {
    id: 3,
    name: '실리카겔',
    subtitle: 'NO PAIN',
    image: sili,
  },
  {
    id: 4,
    name: '키키',
    subtitle: 'KIKI',
    image: kiki,
  },
];

export default function Artist() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const handleMore = () => {
    navigate('/artist');
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? artists.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setCurrentX(e.clientX);
    const offset = currentX - startX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const threshold = 100; // 드래그 임계값
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // 오른쪽으로 드래그 - 이전 아티스트
        handlePrev();
      } else {
        // 왼쪽으로 드래그 - 다음 아티스트
        handleNext();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    setCurrentX(e.touches[0].clientX);
    const offset = currentX - startX;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const threshold = 50; // 터치 임계값
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // 오른쪽으로 스와이프 - 이전 아티스트
        handlePrev();
      } else {
        // 왼쪽으로 스와이프 - 다음 아티스트
        handleNext();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const currentArtist = artists[currentIndex];
  const prevArtist =
    artists[currentIndex === 0 ? artists.length - 1 : currentIndex - 1];
  const nextArtist =
    artists[currentIndex === artists.length - 1 ? 0 : currentIndex + 1];

  return (
    <S.Container src={currentArtist.image}>
      <S.TextContainer>
        <S.HeaderText>대동제 특별출연</S.HeaderText>
        <S.MainTextContainer>
          <S.MainLeftText>
            상명대를 빛내줄
            <br />
            4팀의 아티스트는?
          </S.MainLeftText>
          <S.MainRightText onClick={handleMore}>더보기</S.MainRightText>
        </S.MainTextContainer>
      </S.TextContainer>

      <S.SlideContainer
        ref={slideRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: `translateX(${dragOffset}px)`,
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
      >
        <S.ArtistCardWrapper>
          <S.PrevArtistCard>
            <S.ArtistImage src={prevArtist.image} alt={prevArtist.name} />
            <S.ArtistCardOverlay2 />
          </S.PrevArtistCard>

          <S.CurrentArtistCard>
            <S.ArtistImage src={currentArtist.image} alt={currentArtist.name} />
            <S.ArtistCardOverlay />
            {/* <S.ArtistSubtitle>{currentArtist.subtitle}</S.ArtistSubtitle> */}
            <S.ArtistName>{currentArtist.name}</S.ArtistName>
          </S.CurrentArtistCard>

          <S.NextArtistCard>
            <S.ArtistImage src={nextArtist.image} alt={nextArtist.name} />
            <S.ArtistCardOverlay2 />
          </S.NextArtistCard>
        </S.ArtistCardWrapper>
      </S.SlideContainer>

      <S.IndicatorContainer>
        {artists.map((_, index) => (
          <S.Indicator
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </S.IndicatorContainer>
    </S.Container>
  );
}
