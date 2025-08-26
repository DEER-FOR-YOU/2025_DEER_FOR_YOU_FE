import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import ProtectedLayout from './layouts/ProtectedLayout';
import { ROUTES } from './constants/routes';

const Artist = lazy(() => import('./pages/artist'));
const Goods = lazy(() => import('./pages/goods'));
const Home = lazy(() => import('./pages/home'));
const Map = lazy(() => import('./pages/map'));
const Timeline = lazy(() => import('./pages/timeline'));
const Notice = lazy(() => import('./pages/notice'));
const NoticePost = lazy(() => import('./pages/notice/post'));
const My = lazy(() => import('./pages/mypage'));
const Register = lazy(() => import('./pages/register'));
const Login = lazy(() => import('./pages/login'));
const Password = lazy(() => import('./pages/password'));
const NoticeEdit = lazy(() => import('./pages/notice/edit'));
const LostItemPage = lazy(() => import('./pages/lostItem'));
const LostItemCreatePage = lazy(() => import('./pages/lostItem/create'));
const LostItemEditPage = lazy(() => import('./pages/lostItem/edit'));
const BoothsPage = lazy(() => import('./pages/booths'));
const BoothsDetailPage = lazy(() => import('./pages/booths/id'));

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<></>}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        element: <GuestLayout />,
        children: [
          {
            path: ROUTES.HOME,
            element: withSuspense(<Home />),
          },
          {
            path: ROUTES.ARTISTS,
            element: withSuspense(<Artist />),
          },
          {
            path: ROUTES.GOODS,
            element: withSuspense(<Goods />),
          },
          {
            path: ROUTES.MAP,
            element: withSuspense(<Map />),
          },
          {
            path: ROUTES.TIMELINE,
            element: withSuspense(<Timeline />),
          },
          {
            path: ROUTES.NOTICE,
            element: withSuspense(<Notice />),
          },
          {
            path: ROUTES.MYPAGE,
            element: withSuspense(<My />),
          },
          {
            path: ROUTES.LOGIN,
            element: withSuspense(<Login />),
          },
          {
            path: ROUTES.REGISTER,
            element: withSuspense(<Register />),
          },
          {
            path: ROUTES.FIND_PASSWORD,
            element: withSuspense(<Password />),
          },
          {
            path: ROUTES.CHANGE_PASSWORD,
            element: withSuspense(<Password />),
          },
          {
            path: ROUTES.LOST_ITEM,
            element: withSuspense(<LostItemPage />),
          },
            path: ROUTES.BOOTHS,
            element: withSuspense(<BoothsPage />),
          },
          {
            path: ROUTES.BOOTHS_DETAIL,
            element: withSuspense(<BoothsDetailPage />),
          },
        ],
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: ROUTES.NOTICE_POST,
            element: withSuspense(<NoticePost />),
          },
          {
            path: ROUTES.NOTICE_EDIT,
            element: withSuspense(<NoticeEdit />),
          },
          {
            path: ROUTES.LOST_ITEM_EDIT,
            element: withSuspense(<LostItemEditPage />),
          },
          {
            path: ROUTES.LOST_ITEM_CREATE,
            element: withSuspense(<LostItemCreatePage />),
          },
        ],
      },
    ],
  },
]);

export default router;
