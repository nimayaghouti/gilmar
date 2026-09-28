'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PatternBackground from '@/components/backgrounds/PatternBackground';
import IconContainer from '@/components/icons/IconContainer';
import ResidenceGlyph from '@/components/icons/ResidenceGlyph';

import RoomCard from './RoomCard';

const HEADING = 'انواع اتاق‌های اقامتگاه گیلمار';
const DESCRIPTION =
  'اتاق‌های گیلمار با فضایی دنج و امکانات مناسب، برای اقامتی آرام در دل طبیعت آماده شده‌اند.';

const ROOM_TITLE = 'خانه‌ی چوبی گیلمار';
const ROOM_PRICE = 'هر شب اقامت از ۱۳۰۰۰۰۰ تومان';

const ROOMS = [
  { src: '/images/residence/package-1.png', alt: ROOM_TITLE },
  { src: '/images/residence/package-2.png', alt: ROOM_TITLE },
  { src: '/images/residence/package-3.png', alt: ROOM_TITLE },
  { src: '/images/residence/package-4.png', alt: ROOM_TITLE },
] as const;

export default function Residence() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        mt: 2,
        mx: 'auto',
        px: { xs: 3, md: 5 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -20,
          left: -20,
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
          pointerEvents: 'none',
        }}
      >
        <PatternBackground />
      </Box>

      <Stack
        spacing={2}
        sx={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 620,
          mx: 'auto',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <IconContainer>
          <ResidenceGlyph />
        </IconContainer>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
          {HEADING}
        </Typography>
        <Typography sx={{ textAlign: 'center', mt: '4px!important' }}>
          {DESCRIPTION}
        </Typography>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
          position: 'relative',
          zIndex: 1,
          mt: { xs: 3, md: 5 },
          gap: 3,
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {ROOMS.map(room => (
          <RoomCard
            key={room.src}
            {...room}
            title={ROOM_TITLE}
            price={ROOM_PRICE}
          />
        ))}
      </Stack>
    </Box>
  );
}
