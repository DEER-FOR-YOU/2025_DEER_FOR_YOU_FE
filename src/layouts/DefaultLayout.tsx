import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';
import { ROUTES } from '../constants/routes';

const DefaultLayout = () => {
  const location = useLocation();
  const showNavbar = [ROUTES.ARTISTS, ROUTES.GOODS, ROUTES.HOME].includes(
    location.pathname,
  );
  return (
    <>
      <Outlet />
      {showNavbar && <Navbar />}
    </>
  );
};

export default DefaultLayout;
