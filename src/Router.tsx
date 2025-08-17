import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import ProtectedLayout from './layouts/ProtectedLayout';
import { ROUTES } from './constants/routes';

const Artist = lazy(() => import('./pages/artist'));
const Goods = lazy(() => import('./pages/goods'));
const Home = lazy(() => import('./pages/home'));

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
        ],
      },
      {
        element: <ProtectedLayout />,
        children: [],
      },
    ],
  },
]);

export default router;
