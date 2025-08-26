import basic_booth from '../../assets/basic_booth.png';
import * as S from './boothList.style';
import arrow_blue from '../../assets/arrow_blue.svg';
import location_icon from '../../assets/where.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { getRandomBooths } from '../../apis/booth';
import { useApiQuery } from '../../apis/config/builder/ApiBuilder';
import { getBoothTypeText } from '../../utils/getBoothTypeText';
import { getBoothLocationText } from '../../utils/getBoothLocationText';

export default function BoothList() {
  const navigate = useNavigate();

  const { data, isLoading } = useApiQuery(getRandomBooths(), [
    'booth',
    'random',
  ]);

  if (isLoading) {
    return <div></div>;
  }

  const handleTotalButtonClick = () => {
    navigate(`${ROUTES.BOOTHS}?location=STUDENT_HALL`);
  };

  return (
    <S.Container>
      <S.TotalButtonContainer onClick={handleTotalButtonClick}>
        <S.ButtonText>전체보기</S.ButtonText>
        <S.TotalButtonImg src={arrow_blue} alt="arrow_right" />
      </S.TotalButtonContainer>
      <S.BoothList>
        {data?.map((item) => (
          <S.BoothItemContainer key={item.id}>
            <S.BoothItemImg
              src={item.image.imageUrl || basic_booth}
              alt="booth_image"
            />
            <S.BoothTextContainer>
              <S.BoothName>{item.boothName}</S.BoothName>
              <S.BoothType>
                {getBoothTypeText(item.boothType, item.boothAffiliation)}
              </S.BoothType>
              <S.BoothNotice>{item.boothNotice}</S.BoothNotice>

              <S.BoothLocation>
                <S.BoothLocationIcon src={location_icon} alt="location_icon" />
                <S.BoothLocationText>
                  {getBoothLocationText(item.locationDetail)}
                </S.BoothLocationText>
              </S.BoothLocation>
            </S.BoothTextContainer>
          </S.BoothItemContainer>
        ))}
      </S.BoothList>
    </S.Container>
  );
}
