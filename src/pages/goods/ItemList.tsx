import React, { useState } from 'react';
import * as S from './itemList.style';
import Button from '../../components/button/Button';
import back from '../../assets/back.svg';
import front from '../../assets/front.svg';
import sticker from '../../assets/goods/sticker.svg';
import keyring from '../../assets/goods/keyring.svg';
import festival_uniform_front from '../../assets/goods/festival_uniform_front.svg';
import festival_uniform_back from '../../assets/goods/festival_uniform_back.svg';
import soccer_uniform_front from '../../assets/goods/soccer_uniform_front.svg';
import soccer_uniform_back from '../../assets/goods/soccer_uniform_back.svg';
import slogan1 from '../../assets/goods/slogan1.svg';
import slogan2 from '../../assets/goods/slogan2.svg';

const itemList = [
  {
    id: 1,
    name: '축제 유니폼',
    price: '4,1000 원',
    image: [festival_uniform_front, festival_uniform_back],
    style: [
      {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '70%',
        height: '70%',
        zIndex: 1,
      },
      {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '70%',
        height: '70%',
      },
    ],
  },
  {
    id: 2,
    name: '축구 유니폼',
    price: '4,1000 원',
    image: [soccer_uniform_front, soccer_uniform_back],
    style: [
      {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '70%',
        height: '70%',
        zIndex: 1,
      },
      {
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '70%',
        height: '70%',
      },
    ],
  },
  {
    id: 3,
    name: '수뭉이 키링',
    price: '6.000 원',
    image: keyring,
  },
  {
    id: 4,
    name: '상명대 슬로건',
    price: '6,000 원',
    image: [slogan1, slogan2],
    style: [
      {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '75%',
        zIndex: 1,
      },
      {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '75%',
      },
    ],
  },
  {
    id: 5,
    name: '타투스티커',
    price: '학생회비 납부 전용',
    image: sticker,
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

  // const handleThumbnailClick = (index: number) => {
  //   setCurrentIndex(index);
  // };

  const currentItem = itemList[currentIndex];

  return (
    <S.ItemListContainer>
      {/* 메인 굿즈 표시 영역 */}
      <S.MainItemSection>
        <Button>
          <S.ButtonImg src={back} alt="back" onClick={handlePrev} />
        </Button>

        <S.MainItemContainer>
          <S.MainTextContainer>
            <S.GoodsName>{currentItem.name}</S.GoodsName>
            <S.GoodsPrice>{currentItem.price}</S.GoodsPrice>
          </S.MainTextContainer>
          <S.MainItemImageContainer>
            {Array.isArray(currentItem.image) ? (
              // 이미지가 배열인 경우 (축제 유니폼 등)
              <>
                {currentItem.image.map((img, index) => (
                  <S.MainItemImage2
                    key={index}
                    src={img}
                    alt={`${currentItem.name} ${index + 1}`}
                    style={currentItem.style?.[index] as React.CSSProperties}
                  />
                ))}
              </>
            ) : (
              // 이미지가 단일인 경우
              <S.MainItemImage src={currentItem.image} alt={currentItem.name} />
            )}
          </S.MainItemImageContainer>
        </S.MainItemContainer>

        <Button>
          <S.ButtonImg src={front} alt="front" onClick={handleNext} />
        </Button>
      </S.MainItemSection>

      {/* 썸네일 목록 */}
      {/* <S.ThumbnailSection>
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
      </S.ThumbnailSection> */}
    </S.ItemListContainer>
  );
}
