import banner from '../../assets/banner.svg';
import * as S from './index.style';
import Slogan from './Slogan';
import Artist from './Artist';
import Board from './Board';

export default function Home() {
  return (
    <S.Container>
      <S.Banner src={banner} alt="banner" />
      <Slogan />
      <Artist />
      <Board />
    </S.Container>
  );
}
