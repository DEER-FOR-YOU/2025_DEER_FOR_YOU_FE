import basic_booth from '../../assets/basic_booth.png';
import * as S from './boothList.style';
import arrow_blue from '../../assets/arrow_blue.svg';
import location_icon from '../../assets/where.svg';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

const mapImage = [
  {
    id: 1,
    boothName: '기본 부스1',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 2,
    boothName: '기본 부스2',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 3,
    boothName: '기본 부스3',
    boothType: '체험',
    boothNotice: '체험 부스입니다.체험 부스입니다.체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 4,
    boothName: '기본 부스4',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 5,
    boothName: '기본 부스5',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 6,
    boothName: '기본 부스6',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 7,
    boothName: '기본 부스7',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
  {
    id: 8,
    boothName: '기본 부스8',
    boothType: '체험',
    boothNotice: '체험 부스입니다.',
    location: '1층 101호',
    image: basic_booth,
  },
];

export default function BoothList() {
  const navigate = useNavigate();

  const handleTotalButtonClick = () => {
    navigate(ROUTES.BOOTHS);
  };
  return (
    <S.Container>
      <S.TotalButtonContainer onClick={handleTotalButtonClick}>
        <S.ButtonText>전체보기</S.ButtonText>
        <S.TotalButtonImg src={arrow_blue} alt="arrow_right" />
      </S.TotalButtonContainer>
      <S.BoothList>
        {mapImage.map((item) => (
          <S.BoothItemContainer key={item.id}>
            <S.BoothItemImg src={item.image} alt="booth_image" />
            <S.BoothTextContainer>
              <S.BoothName>{item.boothName}</S.BoothName>
              <S.BoothType>{item.boothType}</S.BoothType>
              <S.BoothNotice>{item.boothNotice}</S.BoothNotice>

              <S.BoothLocation>
                <S.BoothLocationIcon src={location_icon} alt="location_icon" />
                <S.BoothLocationText>{item.location}</S.BoothLocationText>
              </S.BoothLocation>
            </S.BoothTextContainer>
          </S.BoothItemContainer>
        ))}
      </S.BoothList>
    </S.Container>
  );
}
