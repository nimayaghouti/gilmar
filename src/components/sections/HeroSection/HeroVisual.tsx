'use client';

import Box from '@mui/material/Box';

import HeroCaption from './HeroCaption';
import ReservationBadge from './ReservationBadge';

const FRAME_TOP_PCT = 35.28;
const FRAME_BOTTOM_INSET_PCT = 100 - FRAME_TOP_PCT;
const SEAM_OVERLAP_PX = 1;

const BELOW_1300 = '@media (max-width: 1299.95px)';

export default function HeroVisual() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'min(1280px, calc(100% - 32px))',
        mx: 'auto',
        mt: { lg: -3 },
        zIndex: 2,
      }}
    >
      <Box sx={{ position: 'relative', aspectRatio: '1280 / 581' }}>
        <Box
          component="img"
          src="/images/hero/dot-pattern.png"
          alt=""
          aria-hidden
          sx={{
            position: 'absolute',
            zIndex: 1,
            top: '19px',
            left: '38px',
            width: '100%',
            opacity: 0.3,
            pointerEvents: 'none',
          }}
        />

        <Box
          component="img"
          src="/images/hero/hero-frame.png"
          alt=""
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            filter: 'drop-shadow(0px 0px 19px black);',
            [BELOW_1300]: { display: 'none' },
          }}
        />

        <Box
          component="img"
          src="/images/hero/hero-photo.png"
          alt="اقامتگاه بوم‌گردی گیلمار"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            clipPath: `inset(
              0 0 calc(${FRAME_BOTTOM_INSET_PCT}% - ${SEAM_OVERLAP_PX}px) 0
            )`,
            [BELOW_1300]: { display: 'none' },
          }}
        />

        <Box
          component="img"
          src="/images/hero/hero-photo.png"
          alt=""
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'fill',
            clipPath: `inset(
              calc(${FRAME_TOP_PCT}% - ${SEAM_OVERLAP_PX}px) 0 0 0
            )`,
            WebkitMaskImage: 'url(/images/hero/hero-frame.png)',
            maskImage: 'url(/images/hero/hero-frame.png)',
            WebkitMaskSize: '100% 100%',
            maskSize: '100% 100%',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
            [BELOW_1300]: { display: 'none' },
          }}
        />

        <Box
          component="img"
          src="/images/hero/hero-photo.png"
          alt="اقامتگاه بوم‌گردی گیلمار"
          sx={{
            display: 'none',
            [BELOW_1300]: {
              display: 'block',
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '24px',
            },
          }}
        />
      </Box>

      <Box
        sx={{
          [BELOW_1300]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            mt: 2,
          },
        }}
      >
        <HeroCaption />
        <ReservationBadge />
      </Box>
    </Box>
  );
}
