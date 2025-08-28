import React from 'react';
import * as S from './creator.style';
import starha from '../../assets/creators/starha.png';

export default function Creator() {
  return (
    <S.Container>
      <S.CreatorHeader>
        <S.CreatorTitle>누가 만들었나요?</S.CreatorTitle>
        <S.CreatorMore>더 보기</S.CreatorMore>
      </S.CreatorHeader>
      <S.CreatorList>
        <S.CreatorItem>
          <S.CreatorItemTextDesign>SMUCD</S.CreatorItemTextDesign>
          <S.CreatorItemOverlay />
          <S.CreatorDetailText>
            커뮤니케이션 <br />
            디자인전공
          </S.CreatorDetailText>
        </S.CreatorItem>
        <S.CreatorItem>
          <S.CreatorItemTextDesign>소프트웨어학과</S.CreatorItemTextDesign>
          <S.CreatorItemOverlay />
          <S.CreatorDetailText>소프트웨어학과</S.CreatorDetailText>
        </S.CreatorItem>
        <S.CreatorItem>
          <S.CreatorItemImage src={starha} alt="starha" />
          <S.CreatorItemOverlay />
          <S.CreatorDetailText>
            40대 별하 <br />
            총학생회
          </S.CreatorDetailText>
        </S.CreatorItem>
      </S.CreatorList>
    </S.Container>
  );
}
