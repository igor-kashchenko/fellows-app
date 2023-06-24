import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TranslationProvider from './translationContext/TranslationProvider';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import './index.css';

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

