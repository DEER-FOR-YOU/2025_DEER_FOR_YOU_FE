import Header from '../../components/header';
import banner from '../../assets/banner.svg';
import * as S from './index.style';
import ItemList from './ItemList';
import when from '../../assets/when.svg';
import where from '../../assets/where.svg';

export default function GoodsPage() {
  return (
    <S.GoodsContainer>
      <Header title="굿즈" />
      <S.GoodsBanner src={banner} alt="banner" />
      <S.MainTextContainer>
        <S.MainText>대동제 한정 굿즈 둘러보기</S.MainText>
        <S.SubText>개교 60주년을 기념하는 굿즈를 살펴보세요</S.SubText>
      </S.MainTextContainer>
      <ItemList />
      <S.DetailContainer>
        <S.WhenWhereContainer>
          <S.WhenContainer>
            <S.WhenImageContainer>
              <img src={where} alt="where" />
              <S.LabelText>장소</S.LabelText>
            </S.WhenImageContainer>
            <S.Border>|</S.Border>
            <S.ContentText>상명대학교 계당관 앞 총학생회 부스</S.ContentText>
          </S.WhenContainer>
          <S.WhenContainer>
            <S.WhenImageContainer>
              <img src={when} alt="when" />
              <S.LabelText>시간</S.LabelText>
            </S.WhenImageContainer>
            <S.Border>|</S.Border>
            <S.ContentText>
              9일 <S.SpanBlue>14:00 ~ 22:00</S.SpanBlue> , 10일{' '}
              <S.SpanBlue>10:00 ~ 14:00</S.SpanBlue>{' '}
            </S.ContentText>
          </S.WhenContainer>
        </S.WhenWhereContainer>
        <S.DetailTextContainer>
          <S.DetailText>
            *재고 소진 시 굿즈 판매 이벤트가 조기 종료될 수 있습니다.
          </S.DetailText>
          <S.DetailText>
            *굿즈 사전구매시, 총학생회 부스에서 수령할 수 있습니다.
          </S.DetailText>
          <S.DetailText>
            *굿즈 판매 이벤트 이외에도 다양한 이벤트가 준비되어 있습니다.
          </S.DetailText>
        </S.DetailTextContainer>
      </S.DetailContainer>
    </S.GoodsContainer>
  );
}
