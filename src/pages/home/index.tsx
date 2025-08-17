import banner from '../../assets/banner.svg';
import * as S from './index.style';
import Slogan from './Slogan';
import Artist from './Artist';
import Board from './Board';
import Goods from './Goods';
import Event from './Event';
import Map from './Map';

export default function Home() {
  return (
    <S.Container>
      <S.Banner src={banner} alt="banner" />
      <Slogan />
      <Artist />
      <Board />
      <Map />
      <Goods />
      <Event />
    </S.Container>
  );
}
