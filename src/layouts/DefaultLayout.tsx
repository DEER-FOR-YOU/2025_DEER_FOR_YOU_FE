import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/navbar';
import { ROUTES } from '../constants/routes';

const DefaultLayout = () => {
  const location = useLocation();

  // 라우트 변경 시 스크롤을 최상단으로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  const showNavbar =
    [
      ROUTES.ARTISTS,
      ROUTES.GOODS,
      ROUTES.HOME,
      ROUTES.MAP,
      ROUTES.TIMELINE,
      ROUTES.NOTICE,
      ROUTES.MYPAGE,
      ROUTES.CHANGE_PASSWORD,
      ROUTES.LOST_ITEM,
      ROUTES.BOOTHS,
    ROUTES.MYPAGE_TIMELINE,
    ROUTES.MYPAGE_BOOTH,
    ROUTES.MYPAGE_ACCOUNT,
    ROUTES.MYPAGE_ADMIN,
    ].includes(location.pathname) ||
    location.pathname.startsWith(ROUTES.BOOTHS);


  return (
    <>
      <Outlet />
      {showNavbar && <Navbar />}
    </>
  );
};

export default DefaultLayout;
