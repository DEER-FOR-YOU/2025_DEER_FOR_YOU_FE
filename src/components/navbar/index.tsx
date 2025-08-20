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
      path: ROUTES.TIMELINE,
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
    // 공연 탭 클릭 시 기본값으로 9일 설정
    if (path === ROUTES.TIMELINE) {
      navigate(`${path}?date=9`);
    } else {
      navigate(path);
    }
  };

  const isNavActive = (path: string) => {
    // 공연 탭은 /timeline으로 시작하는 모든 경로에서 active
    if (path === ROUTES.TIMELINE) {
      return location.pathname === ROUTES.TIMELINE;
    }
    return location.pathname === path;
  };

  return (
    <S.NavbarContainer>
      {navItems.map((item) => {
        const isActive = isNavActive(item.path);
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
