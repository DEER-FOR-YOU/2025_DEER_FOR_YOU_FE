import * as S from './lost.style';
import Outer from '../../components/container/outer';
import lost1 from '../../assets/lost/lost1.svg';
import lost2 from '../../assets/lost/lost2.svg';
import lost3 from '../../assets/lost/lost3.svg';

const lostList = [
  {
    image: lost1,
    title: '에어팟',
    place: '한누리관',
    date: '12:23',
  },
  {
    image: lost2,
    title: '에어팟',
    place: '한누리관',
    date: '12:23',
  },
  {
    image: lost3,
    title: '에어팟',
    place: '한누리관',
    date: '12:23',
  },
];

export default function Lost() {
  return (
    <S.LostContainer>
      <S.HeaderWrapper>
        <S.HeaderContainer>
          <S.HeaderTitle>분실물 안내</S.HeaderTitle>
          <S.HeaderSubTitle>
            물품 보관소에서 보관중인 물건을 확인해보세요
          </S.HeaderSubTitle>
        </S.HeaderContainer>
        <S.MoreText>더보기</S.MoreText>
      </S.HeaderWrapper>

      <S.LostList>
        {lostList.map((item, index) => (
          <Outer key={index}>
            <S.LostItemContainer>
              <S.LostItemImageContainer>
                <S.LostItemImage src={item.image} alt="lost" />
              </S.LostItemImageContainer>
              <S.LostItemTitle>{item.title}</S.LostItemTitle>
              <S.LostItemInfoContainer>
                <S.LostItemInfoText>{item.place}</S.LostItemInfoText>
                <S.LostItemInfoText>|</S.LostItemInfoText>
                <S.LostItemInfoText>{item.date}</S.LostItemInfoText>
              </S.LostItemInfoContainer>
            </S.LostItemContainer>
          </Outer>
        ))}
      </S.LostList>
    </S.LostContainer>
  );
}
