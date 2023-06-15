import React from 'react';
import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';

import { Root } from 'components/Root';

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
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);