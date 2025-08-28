import React, { useMemo } from 'react';
import * as S from './Header.style';
import arrowDown from '../../../assets/dropdown_down.svg';
import arrowUp from '../../../assets/dropdown_up.svg';
import back from '../../../assets/arrow_back.svg';
import { useNavigate } from 'react-router-dom';

const MENU = [
  '수박서리',
  'QR코드 구체화',
  '피지컬 100',
  '드레스코드',
  '오징어게임',
  '행운권 추첨',
];

const Header = ({
  currentName,
  open,
  setOpen,
}: {
  currentName: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const navigate = useNavigate();

  const activeIndex = useMemo(
    () => MENU.findIndex((m) => m === currentName),
    [currentName],
  );

  const onSelect = (name: string) => {
    setOpen(false);
    navigate(`/events?name=${encodeURIComponent(name)}`);
  };

  return (
    <>
      <S.Container>
        <S.TitleRow onClick={() => setOpen((v) => !v)}>
          <S.BackIcon src={back} alt="back" onClick={() => navigate(-1)} />
          <S.Title>이벤트</S.Title>
          <S.Chevron src={!open ? arrowUp : arrowDown} open={open} />
        </S.TitleRow>
        <S.Dropdown open={open}>
          <S.MenuGrid>
            {MENU.map((m, idx) => (
              <S.MenuItem
                key={m}
                active={idx === activeIndex}
                onClick={() => onSelect(m)}
              >
                {m}
              </S.MenuItem>
            ))}
          </S.MenuGrid>
        </S.Dropdown>
      </S.Container>
    </>
  );
};

export default Header;
