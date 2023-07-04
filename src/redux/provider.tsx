'use client';

import { Provider } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material';

import { store } from './store';

const theme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#cb8b37',
    },
    text: {
      primary: '#7c8291'
    }
  }
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    </Provider>
  );
}
