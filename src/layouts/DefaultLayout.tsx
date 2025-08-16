import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/navbar';

const DefaultLayout = () => {
  const location = useLocation();
  const showNavbar = ['/artist', '/goods', '/'].includes(location.pathname);
  return (
    <>
      <Outlet />
      {showNavbar && <Navbar />}
    </>
  );
};

export default DefaultLayout;
