import * as S from './lost.style';
import Outer from '../../components/container/outer';
import { useNavigate } from 'react-router-dom';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getLostItems } from '../../apis/lostItem';
import basicBooth from '../../assets/basic_booth.png';

export default function Lost() {
  const navigate = useNavigate();
  const { data: lostItemsData } = useApiQuery(getLostItems({ page: 1 }), [
    'lostItems',
    1,
  ]);

  const formatTime = (isoString: string) => {
    return new Date(isoString)
      .toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
      .slice(3);
  };

  const removeParentheses = (text: string) => {
    const startIndex = text.indexOf('(');
    if (startIndex !== -1) {
      return text.slice(0, startIndex);
    }
    return text;
  };

  return (
    <S.LostContainer>
      <S.HeaderWrapper>
        <S.HeaderContainer>
          <S.HeaderTitle>분실물 안내</S.HeaderTitle>
          <S.HeaderSubTitle>
            물품 보관소에서 보관중인 물건을 확인해보세요
          </S.HeaderSubTitle>
        </S.HeaderContainer>
        <S.MoreText onClick={() => navigate('/lost-item')}>더보기</S.MoreText>
      </S.HeaderWrapper>

      <S.LostList>
        {lostItemsData?.content?.length === 0 && (
          <S.NoItemTitle>아직 신고된 분실물이 없습니다.</S.NoItemTitle>
        )}
        {lostItemsData?.content?.map((item, index) => (
          <Outer key={index}>
            <S.LostItemContainer
              onClick={() => navigate('/lost-item?number=' + item.lostItemId)}
            >
              <S.LostItemImageContainer>
                <S.LostItemImage
                  src={item.images?.[0]?.imageUrl || basicBooth}
                  alt="Lost Item"
                />
              </S.LostItemImageContainer>
              <S.LostItemTitle>{item.title}</S.LostItemTitle>
              <S.LostItemInfoContainer>
                <S.LostItemInfoText>
                  {removeParentheses(item.lostPlace)}
                </S.LostItemInfoText>
                <S.LostItemInfoText>|</S.LostItemInfoText>
                <S.LostItemInfoText>
                  {formatTime(item.createdAt)}
                </S.LostItemInfoText>
              </S.LostItemInfoContainer>
            </S.LostItemContainer>
          </Outer>
        ))}
      </S.LostList>
    </S.LostContainer>
  );
}
