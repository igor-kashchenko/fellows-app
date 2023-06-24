import { createTheme } from '@mui/material/styles/';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    custom?: {
      text?: string;
      background?: string;
      hover?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    custom: {
      text: '#FFF',
      background: '#0B0B0B',
      hover: '#7417FE',
    },
  },
  typography: {
    fontFamily: 'Manrope, Oswald, KyivTypeSans, sans-serif',
  },
});
