import * as S from './index.style';
import home from '../../assets/home.svg';
import schedule from '../../assets/schedule.svg';
import my from '../../assets/my.svg';
import music from '../../assets/music.svg';

export default function Navbar() {
  return (
    <S.NavbarContainer>
      <S.NavbarItem>
        <img src={home} alt="home" />
        <S.ItemText>홈</S.ItemText>
      </S.NavbarItem>
      <S.NavbarItem>
        <img src={schedule} alt="schedule" />
        <S.ItemText>지도</S.ItemText>
      </S.NavbarItem>
      <S.NavbarItem>
        <img src={music} alt="music" />
        <S.ItemText>공연</S.ItemText>
      </S.NavbarItem>
      <S.NavbarItem>
        <img src={my} alt="my" />
        <S.ItemText>마이</S.ItemText>
      </S.NavbarItem>
    </S.NavbarContainer>
  );
}
