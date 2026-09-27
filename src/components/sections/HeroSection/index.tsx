'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import CtaButton from '@/components/ui/CtaButton';

import HeroBackground from './HeroBackground';
import HeroVisual from './HeroVisual';
import Navbar from './Navbar';

export default function HeroSection() {
  return (
    <Box
      component="header"
      sx={{
        position: 'relative',
        minHeight: { xs: 760, md: 960 },
        overflow: 'hidden',
      }}
    >
      <HeroBackground />

      <Box sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Navbar />

        <Stack
          sx={{
            width: 'min(732px, calc(100% - 40px))',
            mx: 'auto',
            mt: { xs: 6, md: 7 },
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Typography
            component="h1"
            variant="h1"
            sx={{ m: 0, width: '100%', fontSize: '35px' }}
          >
            اقامتگاه بوم‌گردی گیلمار جایی که طبیعت خانه است
          </Typography>

          <Typography
            component="p"
            variant="body1"
            sx={{
              mt: 2,
              mb: 0,
              maxWidth: 732,
              color: 'text.secondary',
              textAlign: 'center',
            }}
          >
            اقامتگاه بوم‌گردی گیلمار بزرگ‌ترین مجموعه اکولوژ شمال کشور دارای
            امکانات رفاهی و تفریحی در فضایی منحصر به فرد با مجوز رسمی از اداره
            میراث فرهنگی، صنایع دستی و گردشگری گیلان فعالیت دارد.
          </Typography>

          <CtaButton label="مهمان گیلمار شو" sx={{ mt: 2 }} />
        </Stack>

        <HeroVisual />
      </Box>
    </Box>
  );
}
