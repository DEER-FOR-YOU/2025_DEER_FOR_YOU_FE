import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './index.style';
import home from '../../assets/home.svg';
import homeActive from '../../assets/home_active.svg';
import schedule from '../../assets/schedule.svg';
import scheduleActive from '../../assets/schecule_active.svg';
import my from '../../assets/my.svg';
import myActive from '../../assets/my_active.svg';
import music from '../../assets/music.svg';
import musicActive from '../../assets/music_active.svg';
import { ROUTES } from '../../constants/routes';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      path: ROUTES.HOME,
      label: '홈',
      icon: home,
      activeIcon: homeActive,
    },
    {
      path: ROUTES.MAP,
      label: '지도',
      icon: schedule,
      activeIcon: scheduleActive,
    },
    {
      path: ROUTES.TIMELINE + '?date=9',
      label: '공연',
      icon: music,
      activeIcon: musicActive,
    },
    {
      path: ROUTES.MY,
      label: '마이',
      icon: my,
      activeIcon: myActive,
    },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
  };

  return (
    <S.NavbarContainer>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <S.NavbarItem
            key={item.path}
            onClick={() => handleNavClick(item.path)}
          >
            <img
              src={isActive ? item.activeIcon : item.icon}
              alt={item.label}
            />
            <S.ItemText isActive={isActive}>{item.label}</S.ItemText>
          </S.NavbarItem>
        );
      })}
    </S.NavbarContainer>
  );
}
