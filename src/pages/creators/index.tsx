import React, { useState } from 'react';
import * as S from './index.style';
import banner from '../../assets/banner.svg';
import defaultProfile from '../../assets/creators/default.svg';

export default function Creators() {
  const [activeTab, setActiveTab] = useState('총학');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const tabData: {
    [key: string]: {
      items: Array<{
        id: number;
        name: string;
        role: string;
        major: string;
        image: string;
      }>;
    };
  } = {
    총학: {
      items: [
        {
          id: 1,
          name: '김상명',
          role: '학생회장',
          major: '컴퓨터공학과',
          image: defaultProfile,
        },
        {
          id: 2,
          name: '이상명',
          role: '부학생회장',
          major: '컴퓨터공학과',
          image: defaultProfile,
        },
      ],
    },
    개발: {
      items: [
        {
          id: 3,
          name: '박개발',
          role: '프론트엔드 개발자',
          major: '컴퓨터공학과',
          image: defaultProfile,
        },
        {
          id: 4,
          name: '최개발',
          role: '백엔드 개발자',
          major: '컴퓨터공학과',
          image: defaultProfile,
        },
      ],
    },
    디자인: {
      items: [
        {
          id: 5,
          name: '정디자인',
          role: 'UI 디자이너',
          major: '디자인과',
          image: defaultProfile,
        },
        {
          id: 6,
          name: '한디자인',
          role: 'UX 디자이너',
          major: '디자인과',
          image: defaultProfile,
        },
      ],
    },
  };

  return (
    <S.Container>
      <S.Banner src={banner} alt="banner" />
      <S.Header>
        <S.HeaderItem
          onClick={() => handleTabClick('총학')}
          isActive={activeTab === '총학'}
        >
          총학
        </S.HeaderItem>
        <S.HeaderItem
          onClick={() => handleTabClick('개발')}
          isActive={activeTab === '개발'}
        >
          개발
        </S.HeaderItem>
        <S.HeaderItem
          onClick={() => handleTabClick('디자인')}
          isActive={activeTab === '디자인'}
        >
          디자인
        </S.HeaderItem>
      </S.Header>
      <S.ContentList>
        {tabData[activeTab].items.map((item) => (
          <S.ContentItem key={item.id}>
            <S.ContetntImg src={defaultProfile} alt="profile" />
            <S.ContentTextContainer>
              <S.ContentName>{item.name}</S.ContentName>
              <S.ContentRole>{item.role}</S.ContentRole>
              <S.ContentMajor>{item.major}</S.ContentMajor>
            </S.ContentTextContainer>
          </S.ContentItem>
        ))}
      </S.ContentList>
    </S.Container>
  );
}
