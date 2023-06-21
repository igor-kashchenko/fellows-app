import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import TranslationProvider from './translationContext/TranslationProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <TranslationProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </TranslationProvider>
  </React.StrictMode>
);

