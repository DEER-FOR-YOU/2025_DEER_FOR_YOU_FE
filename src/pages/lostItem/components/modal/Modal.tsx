import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './Modal.style';
import CloseIcon from '../../assets/close.svg';
import type { LostItemDetailResponse } from '../../../../apis/lostItem/index.types';

interface ModalProps {
  onClose: () => void;
  lostItemDetail?: LostItemDetailResponse;
}

const Modal = ({ onClose, lostItemDetail }: ModalProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClose = () => {
    navigate(location.pathname + location.hash, { replace: true });
    onClose();
  };
  const timeFommater = (time: string | undefined) => {
    if (!time) return '';
    const date = new Date(time);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return `${month}월 ${day}일 ${hour}시 ${minute}분경`;
  };

  const images = lostItemDetail?.images ?? [];
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pointerStartX = useRef<number | null>(null);
  const pointerDeltaX = useRef<number>(0);

  const goTo = (i: number) => {
    if (!images.length) return;
    const next = Math.max(0, Math.min(images.length - 1, i));
    setIndex(next);
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    pointerDeltaX.current = 0;
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (pointerStartX.current == null) return;
    pointerDeltaX.current = e.clientX - pointerStartX.current;
    if (trackRef.current) {
      trackRef.current.style.transition = 'none';
      trackRef.current.style.transform = `translateX(calc(-${index * 100}% + ${pointerDeltaX.current}px))`;
    }
  };

  const onPointerUp = () => {
    if (pointerStartX.current == null) return;
    const delta = pointerDeltaX.current;
    pointerStartX.current = null;
    pointerDeltaX.current = 0;
    if (trackRef.current) trackRef.current.style.transition = '';

    const threshold = 60; // px
    if (delta > threshold) {
      prev();
    } else if (delta < -threshold) {
      next();
    } else {
      // snap back
      if (trackRef.current)
        trackRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

  return (
    <>
      <S.ModalBackground>
        <S.ModalOuter>
          <S.ModalInner>
            <S.ModalContainer>
              <S.ModalHeader>
                분실물 보관함.exe
                <S.ModalHeaderImage
                  src={CloseIcon}
                  alt="Close"
                  onClick={handleClose}
                />
              </S.ModalHeader>
              <S.ItemImageOuter>
                <S.SlideViewport
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onPointerCancel={onPointerUp}
                >
                  <S.SlideTrack
                    ref={trackRef}
                    style={{
                      transform: `translateX(-${index * 100}%)`,
                    }}
                  >
                    {images.map((img, idx) => (
                      <S.Slide key={idx}>
                        <S.ItemImage
                          src={img.imageUrl}
                          alt={`Lost Item ${idx}`}
                        />
                      </S.Slide>
                    ))}
                  </S.SlideTrack>

                  {images.length > 1 && (
                    <>
                      <S.Indicators>
                        {images.map((_, i) => (
                          <S.Indicator
                            key={i}
                            active={i === index}
                            onClick={() => goTo(i)}
                            aria-label={`Go to image ${i + 1}`}
                          />
                        ))}
                      </S.Indicators>
                    </>
                  )}
                </S.SlideViewport>
              </S.ItemImageOuter>
              <S.ItemTitle>{lostItemDetail?.title}</S.ItemTitle>
              <S.ItemSubDescriptionSection>
                <S.ItemSubDescription>
                  <S.SubTitle>습득 장소</S.SubTitle>
                  <S.SubDescription>
                    {lostItemDetail?.lostPlaceDetail}
                  </S.SubDescription>
                </S.ItemSubDescription>
                <S.ItemSubDescription>
                  <S.SubTitle>습득 시간</S.SubTitle>
                  <S.SubDescription>
                    {timeFommater(lostItemDetail?.lostDate)}
                  </S.SubDescription>
                </S.ItemSubDescription>
              </S.ItemSubDescriptionSection>
              <S.HorizontalLine />
              <S.Description>{lostItemDetail?.description}</S.Description>
            </S.ModalContainer>
          </S.ModalInner>
        </S.ModalOuter>
      </S.ModalBackground>
    </>
  );
};

export default Modal;
