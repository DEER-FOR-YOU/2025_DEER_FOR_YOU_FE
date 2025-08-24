import React, { useState } from 'react';
import * as S from './notice.style';
import Outer from '../../components/container/outer';
import Inner from '../../components/container/inner';
// import up from '../../assets/up.svg';
// import down from '../../assets/down.svg';
import Button from '../../components/button/Button';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getNotices } from '../../apis/notice';

export default function Notice() {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const navigate = useNavigate();
  const { data, isLoading } = useApiQuery(getNotices(), ['notice']);
  if (isLoading) {
    return <div></div>;
  }

  const handleItemClick = (index: number) => {
    if (selectedItem === index) {
      // 이미 선택된 아이템을 다시 클릭하면 alert
      navigate(ROUTES.NOTICE);
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
            <S.NoticeList>
              {data?.map((text, index) => (
                <S.NoticeItem
                  key={index}
                  isSelected={selectedItem === index}
                  onClick={() => handleItemClick(index)}
                >
                  {text.title}
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
          <Button
            style={{ alignSelf: 'flex-end' }}
            css={S.Button}
            onClick={() => navigate(ROUTES.NOTICE)}
          >
            전체보기
          </Button>
        </S.NoticeContainer>
      </Outer>
    </S.Container>
  );
}
