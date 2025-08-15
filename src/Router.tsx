import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import GuestLayout from './layouts/GuestLayout';
import ProtectedLayout from './layouts/ProtectedLayout';

const Artist = lazy(() => import('./pages/artist'));

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
            path: '/artist',
            element: withSuspense(<Artist />),
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
