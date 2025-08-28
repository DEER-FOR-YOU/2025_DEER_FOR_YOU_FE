import React, { useEffect, useState } from 'react';
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
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getCount } from '../../apis/goods';

const itemList = [
  {
    id: 1,
    name: '축제 유니폼',
    // 9/9 - 9/10 한정 판매
    limitedSale: true,
    price: '41,000 원',
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
    // 9/9 - 9/10 한정 판매
    limitedSale: true,
    price: '41,000 원',
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
  const [id, setId] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { data } = useApiQuery(getCount(id), ['goods', id], {
    queryKey: ['goods', id],
    enabled: !!id,
  });

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % itemList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + itemList.length) % itemList.length);
  };

  const currentItem = itemList[currentIndex];

  const getLimitedSaleMessage = (): string | null => {
    if (data === 0) {
      return '매진되었습니다.';
    }

    const now = new Date();
    const year = now.getFullYear();
    const month = 8; // 9월 (0-based index -> 8)

    // 9일: 14:00 ~ 22:00
    const start9 = new Date(year, month, 9, 14, 0, 0);
    const end9 = new Date(year, month, 9, 22, 0, 0);

    // 10일: 10:00 ~ 14:00
    const start10 = new Date(year, month, 10, 10, 0, 0);
    const end10 = new Date(year, month, 10, 14, 0, 0);

    const todayDate = now.getDate();

    // 날짜 자체가 9/10이 아니면 '당일 판매 예정 상품입니다'
    if (todayDate !== 9 && todayDate !== 10) {
      return '당일 판매 예정 상품입니다';
    }

    // 9일 처리
    if (todayDate === 9) {
      if (now < start9) {
        return '판매 시간이 아닙니다';
      }

      if (now >= start9 && now <= end9) {
        const diffMs = end9.getTime() - now.getTime();
        const hoursLeft = Math.ceil(diffMs / (1000 * 60 * 60));
        return `당일 판매까지 ${hoursLeft}시간 남음`;
      }

      return '판매 시간이 아닙니다';
    }

    // 10일 처리
    if (todayDate === 10) {
      if (now < start10) {
        return '판매 시간이 아닙니다';
      }

      if (now >= start10 && now <= end10) {
        const diffMs = end10.getTime() - now.getTime();
        const hoursLeft = Math.ceil(diffMs / (1000 * 60 * 60));
        return `당일 판매까지 ${hoursLeft}시간 남음`;
      }
      // 10일 판매 종료 후에는 메시지 없음
      return '판매 시간이 아닙니다';
    }

    return '판매 기간이 종료되었습니다.';
  };

  useEffect(() => {
    setId(currentItem.id);
  }, [currentIndex, currentItem.image, currentItem.id]);

  return (
    <>
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
                <S.MainItemImage
                  src={currentItem.image}
                  alt={currentItem.name}
                />
              )}
            </S.MainItemImageContainer>
          </S.MainItemContainer>
          <Button>
            <S.ButtonImg src={front} alt="front" onClick={handleNext} />
          </Button>
        </S.MainItemSection>
      </S.ItemListContainer>
      {(() => {
        const msg = getLimitedSaleMessage();
        if (msg) {
          return (
            <S.CountWrapper>
              <S.CountTitle>{msg}</S.CountTitle>
              <S.CountContent>
                잔여수량 &nbsp;<span>{data}</span>개 남음
              </S.CountContent>
            </S.CountWrapper>
          );
        }
      })()}
    </>
  );
}
