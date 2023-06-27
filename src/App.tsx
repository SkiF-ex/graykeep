import { createRoot } from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';

import { store } from './slice'
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

const root = createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <Root />
        </ThemeProvider>
    </Provider>
);
