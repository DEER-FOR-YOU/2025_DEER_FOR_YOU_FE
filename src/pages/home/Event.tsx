import React from 'react';
import * as S from './event.style';
import dress from '../../assets/events/dress.svg';
import lucky from '../../assets/events/lucky.svg';
import physical from '../../assets/events/physical.svg';
import qr from '../../assets/events/qr.svg';
import squid from '../../assets/events/squid.svg';
import watermelon from '../../assets/events/watermelon.svg';
import polygon from '../../assets/polygon.svg';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';

const eventList = [
  {
    title: '드레스코드',
    image: dress,
    query: '드레스코드',
  },
  {
    title: 'QR 코드',
    image: qr,
    query: 'QR코드 구체화',
  },

  {
    title: '수박서리',
    image: watermelon,
    query: '수박서리',
  },
  {
    title: '행운권 추첨',
    image: lucky,
    query: '행운권 추첨',
  },
  {
    title: '피지컬 100',
    image: physical,
    query: '피지컬 100',
  },
  {
    title: '오징어게임',
    image: squid,
    query: '오징어게임',
  },
];

export default function Event() {
  const navigate = useNavigate();

  const handleNavigate = (query: string) => {
    navigate(`/events?name=${query}`);
  };

  return (
    <S.Container>
      <S.TextContainer>
        <S.Title>대동제 한정 이벤트</S.Title>
        <S.SubTitle>다양한 이벤트를 참여하여 상품을 받아가세요</S.SubTitle>
      </S.TextContainer>
      <S.EventContainer>
        <S.EventRowBox>
          <Button fullSize onClick={() => handleNavigate(eventList[0].query)}>
            <S.Content>
              <S.EventImage src={eventList[0].image} />
              <S.EventName>{eventList[0].title}</S.EventName>
            </S.Content>
          </Button>
          <Button fullSize onClick={() => handleNavigate(eventList[1].query)}>
            <S.Content>
              <S.EventImage src={eventList[1].image} />
              <S.EventName>{eventList[1].title}</S.EventName>
            </S.Content>
          </Button>
          <Button fullSize onClick={() => handleNavigate(eventList[2].query)}>
            <S.Content>
              <S.EventImage src={eventList[2].image} />
              <S.EventName>{eventList[2].title}</S.EventName>
            </S.Content>
          </Button>
        </S.EventRowBox>
        <S.EventRowBox>
          <Button fullSize onClick={() => handleNavigate(eventList[3].query)}>
            <S.Content>
              <S.EventImage src={eventList[3].image} />
              <S.EventName>{eventList[3].title}</S.EventName>
            </S.Content>
          </Button>
          <Button fullSize onClick={() => handleNavigate(eventList[4].query)}>
            <S.Content>
              <S.EventImage src={eventList[4].image} />
              <S.EventName>{eventList[4].title}</S.EventName>
            </S.Content>
          </Button>
          <Button fullSize onClick={() => handleNavigate(eventList[5].query)}>
            <S.Content>
              <S.EventImage src={eventList[5].image} />
              <S.EventName>{eventList[5].title}</S.EventName>
            </S.Content>
          </Button>
          <S.Detail>총학 잡으러 가기</S.Detail>
          <S.PolygonImage src={polygon} />
        </S.EventRowBox>
      </S.EventContainer>
    </S.Container>
  );
}
