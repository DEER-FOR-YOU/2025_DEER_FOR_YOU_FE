import * as S from './artist.style';
import crush from '../../assets/artists/crush.png';
import carder from '../../assets/artists/carder.png';
import sili from '../../assets/artists/sili.png';
import kiki from '../../assets/artists/kiki2.png';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ROUTES } from '../../constants/routes';

const artists = [
  {
    id: 1,
    name: '크러쉬',
    subtitle: '9/9',
    image: crush,
  },
  {
    id: 2,
    name: '카더가든',
    subtitle: '9/9',
    image: carder,
  },
  {
    id: 3,
    name: '실리카겔',
    subtitle: '9/10',
    image: sili,
  },
  {
    id: 4,
    name: '키키',
    subtitle: '9/10',
    image: kiki,
  },
];

export default function Artist() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // 자동 슬라이딩 시작
  const startAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  // 자동 슬라이딩 정지
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  // 자동 슬라이딩 관리
  useEffect(() => {
    if (!isDragging) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [isDragging]);

  const handleMore = () => {
    navigate(ROUTES.ARTISTS);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? artists.length - 1 : prev - 1));
    stopAutoPlay();
    setTimeout(() => {
      if (!isDragging) startAutoPlay();
    }, 1000);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
    stopAutoPlay();
    setTimeout(() => {
      if (!isDragging) startAutoPlay();
    }, 1000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoPlay();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const offset = e.clientX - startX;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const threshold = 100;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoPlay();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const offset = e.touches[0].clientX - startX;
    setDragOffset(offset);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const threshold = 50;
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
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
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          transform: isDragging ? `translateX(${dragOffset}px)` : 'none',
          transition: isDragging ? 'none' : 'transform 0.3s ease',
        }}
      >
        <S.ArtistCardWrapper isDragging={isDragging}>
          <S.PrevArtistCard isDragging={isDragging}>
            <S.ArtistImage src={prevArtist.image} alt={prevArtist.name} />
            <S.ArtistCardOverlay2 />
          </S.PrevArtistCard>

          <S.CurrentArtistCard>
            <S.ArtistImage src={currentArtist.image} alt={currentArtist.name} />
            <S.ArtistCardOverlay />
            <S.ArtistTextContainer>
              <S.ArtistSubtitle>{currentArtist.subtitle}</S.ArtistSubtitle>
              <S.ArtistName>{currentArtist.name}</S.ArtistName>
            </S.ArtistTextContainer>
          </S.CurrentArtistCard>

          <S.NextArtistCard isDragging={isDragging}>
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
