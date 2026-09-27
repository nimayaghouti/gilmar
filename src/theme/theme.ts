'use client';

import { createTheme } from '@mui/material/styles';

import { abarMidFaNum } from '../app/fonts';

declare module '@mui/material/styles' {
  interface Theme {
    brand: {
      gradients: {
        cta: string;
        badge: string;
      };
      neutrals: {
        n7: string; // #F4F5F6
        n8: string; // #FCFCFD
      };
      accent: {
        pink: string;
        blue: string;
        purple: string;
        violet: string;
        yellow: string;
        lilac: string;
      };
      shadows: {
        photoCard: string;
        photoCardInset: string;
        depth3: string;
        depth4: string;
        chip: string;
      };
    };
  }
  interface ThemeOptions {
    brand?: Theme['brand'];
  }
}

export const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    text: {
      primary: '#1a1a1a',
      secondary: '#4c4c4d',
    },
    background: {
      default: '#ffffff',
      paper: '#fcfdfd',
    },
    primary: { main: '#26E05A', contrastText: '#ffffff' },
    secondary: { main: '#02ADF7', contrastText: '#ffffff' },
    divider: '#eef3f6',
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily: abarMidFaNum.style.fontFamily,
    h1: {
      fontSize: '40px',
      fontWeight: 800,
      letterSpacing: '-2.4px',
      lineHeight: 1.2,
      color: '#1a1a1a',
    },
    h2: {
      fontSize: '32px',
      fontWeight: 800,
      letterSpacing: '-1.4px',
      lineHeight: 1.3,
      color: '#1a1a1a',
    },
    h3: {
      fontSize: '16px',
      fontWeight: 800,
      lineHeight: '32px',
      color: '#1a1a1a',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '32px',
      color: '#4c4c4d',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 600,
      lineHeight: '32px',
      color: '#4c4c4d',
    },
    button: {
      fontSize: '14px',
      fontWeight: 800,
      textTransform: 'none',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 9999,
        },
      },
    },
  },
  brand: {
    gradients: {
      cta: 'linear-gradient(198deg, #02ADF7 18.979%, #26E05A 121.29%)',
      badge: 'linear-gradient(229.5deg, #02ADF7 18.979%, #26E05A 121.29%)',
    },
    neutrals: {
      n7: '#F4F5F6',
      n8: '#FCFCFD',
    },
    accent: {
      pink: '#FABDC1',
      blue: '#9AC8FF',
      purple: '#CDB4DB',
      violet: '#92A5EF',
      yellow: '#FFD166',
      lilac: '#DCB9F0',
    },
    shadows: {
      photoCard: '0px 24px 48px rgba(0,46,37,0.12)',
      photoCardInset: 'inset 0px 10px 30px rgba(0,0,0,0.32)',
      depth3: '0px 40px 32px -24px rgba(15,15,15,0.12)',
      depth4: '0px 64px 64px -48px rgba(15,15,15,0.08)',
      chip: '0px 40px 32px rgba(15,15,15,0.1)',
    },
  },
});
