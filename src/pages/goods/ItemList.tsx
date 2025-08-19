import React, { useState } from 'react';
import * as S from './itemList.style';
import goods1 from '../../assets/goods/goods1.svg';
import goods2 from '../../assets/goods/goods2.svg';
import goods3 from '../../assets/goods/goods3.svg';
import goods4 from '../../assets/goods/goods4.svg';
import goods5 from '../../assets/goods/goods5.svg';
import Button from '../../components/button/Button';
import back from '../../assets/back.svg';
import front from '../../assets/front.svg';

const itemList = [
  {
    id: 1,
    name: '대동제 수뭉이 굿즈',
    price: '48,900 원',
    image: goods1,
  },
  {
    id: 2,
    name: '대동제 수뭉이 키링',
    price: '12,600 원',
    image: goods2,
  },
  {
    id: 3,
    name: '대동제 유니폼 굿즈',
    price: '64,000 원',
    image: goods3,
  },
  {
    id: 4,
    name: '타투 스티커',
    price: '6,000 원',
    image: goods4,
  },
  {
    id: 5,
    name: '수뭉이 가방',
    price: '30,000 원',
    image: goods5,
  },
];

export default function ItemList() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % itemList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + itemList.length) % itemList.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentItem = itemList[currentIndex];

  return (
    <S.ItemListContainer>
      {/* 메인 굿즈 표시 영역 */}
      <S.MainItemSection>
        <Button>
          <S.ButtonImg src={back} alt="back" onClick={handlePrev} />
        </Button>

        <S.MainItemContainer src={currentItem.image}>
          <S.MainTextContainer>
            <S.GoodsName>{currentItem.name}</S.GoodsName>
            <S.GoodsPrice>{currentItem.price}</S.GoodsPrice>
          </S.MainTextContainer>
          <S.MainItemImage src={currentItem.image} alt={currentItem.name} />
        </S.MainItemContainer>

        <Button>
          <S.ButtonImg src={front} alt="front" onClick={handleNext} />
        </Button>
      </S.MainItemSection>

      {/* 썸네일 목록 */}
      <S.ThumbnailSection>
        {itemList
          .filter((_, index) => index !== currentIndex)
          .map((item, index) => (
            <S.ThumbnailItem
              key={item.id}
              src={item.image}
              onClick={() => handleThumbnailClick(itemList.indexOf(item))}
            >
              <S.ThumbnailImage src={item.image} alt={item.name} />
            </S.ThumbnailItem>
          ))}
      </S.ThumbnailSection>
    </S.ItemListContainer>
  );
}
