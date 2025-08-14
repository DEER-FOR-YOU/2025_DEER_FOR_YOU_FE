import React, { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

const Artist = lazy(() => import('./pages/artist'));

const withSuspense = (element: React.ReactNode) => (
  <Suspense fallback={<></>}>{element}</Suspense>
);

const router = createBrowserRouter([
  {
    path: '/artist',
    element: withSuspense(<Artist />),
  },
]);

export default router;
