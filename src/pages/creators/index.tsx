import React, { useState } from 'react';
import * as S from './index.style';
import banner from '../../assets/banner.svg';
import defaultProfile from '../../assets/creators/default.svg';
import id1 from '../../assets/creators/id1.jpeg';
import id2 from '../../assets/creators/id2.jpeg';
import id3 from '../../assets/creators/id3.jpeg';
import id4 from '../../assets/creators/id4.jpeg';
import id5 from '../../assets/creators/id5.webp';
import id6 from '../../assets/creators/id6.png';
import id7 from '../../assets/creators/id7.jpeg';
import id8 from '../../assets/creators/id8.jpeg';
import id9 from '../../assets/creators/id9.jpeg';

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
          name: '이동현',
          role: '기획 총괄',
          major: '식품식품공학과 21학번',
          image: id1,
        },
        {
          id: 2,
          name: '조하민',
          role: '기획 부총괄',
          major: '스페이스 디자인전공 23학번',
          image: id2,
        },
        {
          id: 3,
          name: '엄정웅',
          role: '기획 부총괄',
          major: '식물식품공학과 22학번',
          image: id3,
        },
        {
          id: 4,
          name: '김예인',
          role: '디자인 부총괄',
          major: '커뮤니케이션 디자인전공 23학번',
          image: id4,
        },
      ],
    },
    개발: {
      items: [
        {
          id: 5,
          name: '정연재',
          role: 'FE / BE',
          major: '소프트웨어학과 20학번',
          image: id5,
        },
        {
          id: 6,
          name: '차현우',
          role: 'FE',
          major: '소프트웨어학과 22학번',
          image: id6,
        },
        {
          id: 7,
          name: '금한준',
          role: 'FE',
          major: '소프트웨어학과 22학번',
          image: id7,
        },
        {
          id: 8,
          name: '권민석',
          role: 'BE',
          major: '소프트웨어학과 21학번',
          image: id8,
        },
        {
          id: 9,
          name: '김대현',
          role: 'BE',
          major: '소프트웨어학과 22학번',
          image: id9,
        },
      ],
    },
    디자인: {
      items: [
        {
          id: 10,
          name: '디노',
          role: '디자인 팀원',
          major: '커뮤니케이션 디자인전공 20학번',
          image: defaultProfile,
        },
        {
          id: 11,
          name: '테드',
          role: '디자인 팀원',
          major: '커뮤니케이션 디자인전공 21학번',
          image: defaultProfile,
        },
        {
          id: 12,
          name: '어피치',
          role: '디자인 팀원',
          major: '커뮤니케이션 디자인전공 21학번',
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
            <S.ContetntImg src={item.image} alt="profile" />
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
