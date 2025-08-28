import React, { useMemo, useState } from 'react';
import type { JSX } from 'react';
import * as S from './index.styles';
import Header from './components/Header';
import { useSearchParams } from 'react-router-dom';

import DressImage from './assets/dress.png';
import LuckyImage from './assets/lucky.png';
import PhysicalImage from './assets/physical.png';
import QRImage from './assets/qrcode.png';
import SquidImage from './assets/squid.png';
import WatermelonImage from './assets/watermelon.png';
import Watermelon from './information/Watermelon';
import QrCode from './information/QrCode';
import Physical from './information/Physical';
import DressCode from './information/DressCode';
import Squid from './information/Squid';
import Lucky from './information/Lucky';

type EventKey =
  | '수박서리'
  | 'QR코드 구체화'
  | '피지컬 100'
  | '드레스코드'
  | '오징어게임'
  | '행운권 추첨';

const EVENTS: Record<
  EventKey,
  {
    menuTitle: string;
    image: string;
    imageName: string;
    description: React.ReactNode;
    InfoComponent: JSX.Element;
  }
> = {
  수박서리: {
    menuTitle: '수박서리 이벤트',
    image: WatermelonImage,
    imageName: '수박 서리!',
    description: (
      <>
        <S.MainImageText>스릴 넘치는 수박 서리 미션!</S.MainImageText>
        <S.MainImageText>추격자 농부를 피해 달려가세요.</S.MainImageText>
        <S.MainImageText>잡히지 않고 무사히 도망치면 성공!</S.MainImageText>
      </>
    ),
    InfoComponent: <Watermelon />,
  },
  'QR코드 구체화': {
    menuTitle: 'QR코드 이벤트',
    image: QRImage,
    imageName: 'QR코드',
    description: (
      <>
        <S.MainImageText>축제 현장에서 특별한 선물의 주인공이</S.MainImageText>
        <S.MainImageText>되어보세요. 행운을 빌어요!</S.MainImageText>
      </>
    ),
    InfoComponent: <QrCode />,
  },
  '피지컬 100': {
    menuTitle: '피지컬 100 이벤트',
    image: PhysicalImage,
    imageName: '피지컬 100',
    description: (
      <>
        <S.MainImageText>굽혀펴기, 데드리프트, 턱걸이!</S.MainImageText>
        <S.MainImageText>세 가지 종목에서 기록을 측정해</S.MainImageText>
        <S.MainImageText>나의 한계에 도전해보세요!</S.MainImageText>
      </>
    ),
    InfoComponent: <Physical />,
  },
  드레스코드: {
    menuTitle: '드레스코드 이벤트',
    image: DressImage,
    imageName: '드레스코드',
    description: (
      <>
        <S.MainImageText>2025 대동제 드레스코드는 바로 Blue!</S.MainImageText>
        <S.MainImageText>푸른빛 아이템을 착용하고 오시면</S.MainImageText>
        <S.MainImageText>
          상품도 받고, 더 신나게 축제도 즐길 수 있어요!
        </S.MainImageText>
      </>
    ),
    InfoComponent: <DressCode />,
  },
  오징어게임: {
    menuTitle: '오징어게임 이벤트',
    image: SquidImage,
    imageName: '오징어게임',
    description: (
      <>
        <S.MainImageText>병뚜껑 컬링, 딱치치기, 무궁화 꽃이</S.MainImageText>
        <S.MainImageText>피었습니다, 비석치기, 팽이치기</S.MainImageText>
        <S.MainImageText>
          총 5가지 게임에서 총학생회와 대결해보세요!
        </S.MainImageText>
      </>
    ),
    InfoComponent: <Squid />,
  },
  '행운권 추첨': {
    menuTitle: '행운권 추첨 이벤트',
    image: LuckyImage,
    imageName: '행운권 추첨',
    description: (
      <>
        <S.MainImageText>팔찌 번호를 행운권 상자에 넣고</S.MainImageText>
        <S.MainImageText>추첨 시간만 기다리면 끝!</S.MainImageText>
        <S.MainImageText>
          놓치지 마세요, 올해의 행운! 완전 럭키비키잖아?✨
        </S.MainImageText>
      </>
    ),
    InfoComponent: <Lucky />,
  },
};

const Event = () => {
  const [open, setOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const currentName = (searchParams.get('name') || '') as EventKey | '';

  const eventData = useMemo(
    () => (currentName ? EVENTS[currentName as EventKey] : undefined),
    [currentName],
  );

  return (
    <>
      <Header currentName={currentName} open={open} setOpen={setOpen} />
      {open && <S.Background onClick={() => setOpen(false)} />}
      <S.Container>
        <S.Title>{eventData?.menuTitle}.smu</S.Title>
        <S.MainImageSection>
          <S.MainImage src={eventData?.image} alt={eventData?.imageName} />
          <S.MainImageTextSection>
            <S.MainImageTitle>{eventData?.imageName}</S.MainImageTitle>
            {eventData?.description}
            <S.MainImagePeriod>2025.09.09 ~ 2025.09.10</S.MainImagePeriod>
          </S.MainImageTextSection>
        </S.MainImageSection>
        {eventData?.InfoComponent}
      </S.Container>
    </>
  );
};

export default Event;
