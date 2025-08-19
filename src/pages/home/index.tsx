import React, { useState } from 'react';
import banner from '../../assets/banner.svg';
import * as S from './index.style';
import Slogan from './Slogan';
import Artist from './Artist';
import Board from './Board';
import Goods from './Goods';
import Event from './Event';
import Map from './Map';
import { EventModal } from './modal';
import Button from '../../components/button/Button';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSloganClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.Container>
      <S.Banner src={banner} alt="banner" />
      <Slogan onSloganClick={handleSloganClick} />
      <Artist />
      <Board />
      <Map />
      <Goods />
      <Event />

      <EventModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <Button fullSize>버튼</Button>
    </S.Container>
  );
}
