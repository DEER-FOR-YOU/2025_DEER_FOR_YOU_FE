import * as S from './artist.style';
import crush from '../../assets/artists/crush.png';
import carder from '../../assets/artists/carder.png';
import sili from '../../assets/artists/sili.png';
import kiki from '../../assets/artists/kiki.png';
import sikgu from '../../assets/artists/sikgu.png';
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { ROUTES } from '../../constants/routes';
import { motion, AnimatePresence } from 'framer-motion';

const artists = [
  { id: 1, name: '크러쉬', subtitle: '9/9', image: crush },
  { id: 2, name: '카더가든', subtitle: '9/9', image: carder },
  { id: 3, name: '실리카겔', subtitle: '9/10', image: sili },
  { id: 4, name: 'KiiiKiii ', subtitle: '9/10', image: kiki },
  { id: 5, name: '식구', subtitle: '9/10', image: sikgu },
];

export default function Artist() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState(artists[0].image);
  const [nextBg, setNextBg] = useState<string | null>(null);
  const [displayedIndex, setDisplayedIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const MotionBackground = motion(S.BackgroundLayer);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
    }, 5000);
  };
  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };
  useEffect(() => {
    if (!isDragging) startAutoPlay();
    return () => stopAutoPlay();
  }, [isDragging]);

  const handleMore = () => navigate(ROUTES.ARTISTS);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? artists.length - 1 : prev - 1));
    stopAutoPlay();
    setTimeout(() => !isDragging && startAutoPlay(), 1000);
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1));
    stopAutoPlay();
    setTimeout(() => !isDragging && startAutoPlay(), 1000);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoPlay();
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - startX);
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    if (Math.abs(dragOffset) > 100)
      dragOffset > 0 ? handlePrev() : handleNext();
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
    setDragOffset(e.touches[0].clientX - startX);
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    if (Math.abs(dragOffset) > 50) dragOffset > 0 ? handlePrev() : handleNext();
    setIsDragging(false);
    setDragOffset(0);
  };

  const prevArtist =
    artists[currentIndex === 0 ? artists.length - 1 : currentIndex - 1];
  const nextArtist =
    artists[currentIndex === artists.length - 1 ? 0 : currentIndex + 1];

  useEffect(() => {
    if (currentIndex === displayedIndex) return;
    const imgSrc = artists[currentIndex].image;
    if (imgSrc === bgImage) {
      setNextBg(null);
      setIsChanging(true);
      const tQuick = setTimeout(() => {
        setDisplayedIndex(currentIndex);
        setIsChanging(false);
      }, 50);
      return () => clearTimeout(tQuick);
    }

    let canceled = false;
    const img = new Image();
    img.src = imgSrc;
    let t: ReturnType<typeof setTimeout> | null = null;
    img.onload = () => {
      if (canceled) return;
      setNextBg(imgSrc);
      setIsChanging(true);
      t = setTimeout(() => {
        setDisplayedIndex(currentIndex);
        setBgImage(imgSrc);
        setNextBg(null);
        setIsChanging(false);
      }, 450);
    };
    img.onerror = () => {
      setDisplayedIndex(currentIndex);
      setBgImage(imgSrc);
      setNextBg(null);
      setIsChanging(false);
    };
    return () => {
      canceled = true;
      if (t) clearTimeout(t);
    };
  }, [currentIndex, displayedIndex, bgImage]);

  return (
    <S.Container>
      <S.BackgroundLayer src={bgImage} visible={true} />
      <AnimatePresence>
        {nextBg && (
          <MotionBackground
            key={nextBg}
            src={nextBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            visible={true}
          />
        )}
      </AnimatePresence>

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

      {/* 슬라이드 영역 */}
      <S.SlideContainer
        isDragging={isDragging}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <motion.div
          key={`prev-${prevArtist.id}`}
          initial={false}
          animate={{ scale: 0.8, opacity: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <S.PrevArtistCard>
            <S.ArtistImage src={prevArtist.image} alt={prevArtist.name} />
            <S.ArtistCardOverlay2 />
          </S.PrevArtistCard>
        </motion.div>
        <>
          <S.CurrentArtistCard>
            <S.ArtistImageWrapper>
              <motion.img
                src={artists[displayedIndex].image}
                alt={artists[displayedIndex].name}
                key={`display-${displayedIndex}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: isChanging ? 0 : 1 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 1,
                }}
              />
              <motion.img
                src={artists[currentIndex].image}
                alt={artists[currentIndex].name}
                key={`current-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isChanging ? 1 : 0 }}
                transition={{ duration: 0.45, ease: 'easeInOut' }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  zIndex: 2,
                }}
              />
              <S.ArtistCardOverlay />
            </S.ArtistImageWrapper>
            <S.ArtistTextContainer>
              <S.ArtistSubtitle>
                {artists[displayedIndex].subtitle}
              </S.ArtistSubtitle>
              <S.ArtistName>{artists[displayedIndex].name}</S.ArtistName>
            </S.ArtistTextContainer>
          </S.CurrentArtistCard>
        </>
        <motion.div
          key={`next-${nextArtist.id}`}
          initial={false}
          animate={{ scale: 0.8, opacity: 0.6 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <S.NextArtistCard>
            <S.ArtistImage src={nextArtist.image} alt={nextArtist.name} />
            <S.ArtistCardOverlay2 />
          </S.NextArtistCard>
        </motion.div>
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
