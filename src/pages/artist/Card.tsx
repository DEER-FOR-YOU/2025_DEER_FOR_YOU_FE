import React from 'react';
import * as S from './card.style';

interface CardProps {
  data: {
    title: string;
    name: string;
    img: string;
    content: string;
    when: string;
    time?: string;
    place: string;
  };
  marginBottom: number;
}
export default function Card({ data, marginBottom }: CardProps) {
  return (
    <S.CardContainer marginBottom={marginBottom}>
      <S.TitleContainer>
        <S.Title>{data.title}</S.Title>
      </S.TitleContainer>
      <S.ImgContainer>
        <S.Img src={data.img} alt="card" />
        <S.TextContainer>
          <S.Name>{data.name}</S.Name>
          <S.Content>{data.content}</S.Content>
          <S.DetailContainer>
            <S.DetailItem>{data.when}</S.DetailItem>
            {data.time && <S.DetailItem>{data.time}</S.DetailItem>}
            <S.DetailItem>{data.place}</S.DetailItem>
          </S.DetailContainer>
        </S.TextContainer>
      </S.ImgContainer>
    </S.CardContainer>
  );
}
