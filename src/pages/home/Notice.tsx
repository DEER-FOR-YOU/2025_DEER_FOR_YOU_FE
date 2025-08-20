import React from 'react';
import * as S from './notice.style';
import Outer from '../../components/container/outer';
import Inner from '../../components/container/inner';
import track from '../../assets/track.svg';
import thumb from '../../assets/thumb.svg';
import up from '../../assets/up.svg';
import down from '../../assets/down.svg';
import Button from '../../components/button/Button';

export default function Notice() {
  return (
    <S.Container>
      <S.NoticeHeader>공지사항</S.NoticeHeader>
      <Outer>
        <S.NoticeContainer>
          <Inner>
            <S.NoticeList src={track} thumb={thumb}>
              <S.NoticeItem>
                총학을 이겨라 당첨자 발표 총학을 이겨라 당첨자 발표 총학을
                이겨라 당첨자 발표{' '}
              </S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
              <S.NoticeItem>총학을 이겨라 당첨자 발표</S.NoticeItem>
            </S.NoticeList>
          </Inner>
          {/* <S.ScrollUpButtonWrapper>
            <Button>
              <S.ScrollButtonImg src={up} />
            </Button>
          </S.ScrollUpButtonWrapper>
          <S.ScrollDownButtonWrapper>
            <Button>
              <S.ScrollButtonImg src={down} />
            </Button>
          </S.ScrollDownButtonWrapper> */}
          <Button style={{ alignSelf: 'flex-end' }} css={S.Button}>
            전체보기
          </Button>
        </S.NoticeContainer>
      </Outer>
    </S.Container>
  );
}
