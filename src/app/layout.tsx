import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { Metadata } from 'next';

import { theme } from '../theme/theme';
import { abarHighFaNum, abarLowFaNum, abarMidFaNum } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'اقامتگاه بوم‌گردی گیلمار',
  description: 'اقامتگاه بوم‌گردی گیلمار، در دل طبیعت گیلان',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${abarHighFaNum.variable} ${abarMidFaNum.variable} ${abarLowFaNum.variable}`}
    >
      <body>
        <AppRouterCacheProvider options={{ key: 'mui' }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
