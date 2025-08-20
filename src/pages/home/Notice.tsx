import React, { useState } from 'react';
import * as S from './notice.style';
import Outer from '../../components/container/outer';
import Inner from '../../components/container/inner';
import track from '../../assets/track.svg';
import thumb from '../../assets/thumb.svg';
// import up from '../../assets/up.svg';
// import down from '../../assets/down.svg';
import Button from '../../components/button/Button';

const NOTICE_ITEMS = [
  '총학을 이겨라 당첨자 발표 총학을 이겨라 당첨자 발표 총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
  '총학을 이겨라 당첨자 발표',
];

export default function Notice() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleItemClick = (index: number) => {
    if (selectedItem === index) {
      // 이미 선택된 아이템을 다시 클릭하면 alert
      alert('이미 선택된 공지사항입니다!');
    } else {
      // 새로운 아이템 선택
      setSelectedItem(index);
    }
  };

  return (
    <S.Container>
      <S.NoticeHeader>공지사항</S.NoticeHeader>
      <Outer>
        <S.NoticeContainer>
          <Inner>
            <S.NoticeList src={track} thumb={thumb}>
              {NOTICE_ITEMS.map((text, index) => (
                <S.NoticeItem
                  key={index}
                  isSelected={selectedItem === index}
                  onClick={() => handleItemClick(index)}
                >
                  {text}
                </S.NoticeItem>
              ))}
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
