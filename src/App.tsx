import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import router from './Router';
import { queryClient } from './QueryClient';
import theme from './styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import globalStyles from './styles/globalStyle';
import './App.css';
import { AuthProvider } from './contexts/Auth/AuthContext';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          <Global styles={globalStyles} />
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </Suspense>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
