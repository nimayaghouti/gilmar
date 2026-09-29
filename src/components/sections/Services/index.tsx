'use client';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import PatternBackground from '@/components/backgrounds/PatternBackground';
import IconContainer from '@/components/icons/IconContainer';
import MagicStickIconFilled from '@/components/icons/MagicStickIconFilled';
import Subtract from '@/components/icons/Subtract';

import ServicePhoto from './ServicePhoto';

const HEADING = 'خدمات رفاهی گیلمار برای اقامتی دلنشین';
const DESCRIPTION =
  'در گیلمار، آرامش طبیعت را در کنار خدمات رفاهی کامل تجربه می‌کنید؛ فضایی دنج و صمیمی که برای ساختن لحظاتی آرام، خوش و به‌یادماندنی آماده شده است.';

const PHOTOS = [
  {
    src: '/images/services/birdwatching.png',
    alt: 'پرنده‌نگری در گیلمار',
    caption: 'پرنده نگری',
  },
  {
    src: '/images/services/boating.png',
    alt: 'قایق‌سواری در دریاچه گیلمار',
    caption: 'قایق سواری',
  },
  {
    src: '/images/services/cycling.png',
    alt: 'دوچرخه‌سواری در طبیعت گیلمار',
    caption: 'دوچرخه سواری',
  },
] as const;

const SLOT_SIZES = [
  { width: 254, height: 304 },
  { width: 288, height: 346 },
  { width: 254, height: 304 },
] as const;

const CAROUSEL_GAP = 24;

const SLOT_RIGHT_OFFSETS = [
  0,
  SLOT_SIZES[0].width + CAROUSEL_GAP,
  SLOT_SIZES[0].width + CAROUSEL_GAP + SLOT_SIZES[1].width + CAROUSEL_GAP,
] as const;

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % PHOTOS.length);
  };

  return (
    <Box
      component="section"
      sx={{
        px: { xs: 2, sm: 4, md: 10 },
        pb: { xs: 8, md: 12 },
        overflowX: 'hidden',
        maxWidth: '1440px',
        mx: 'auto',
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 6, md: 5 }}
        sx={{
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: 620 },
            flexShrink: 0,
            pl: { xs: 0, md: 2 },
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              top: -60,
              right: -100,
              zIndex: 0,
              display: { xs: 'none', md: 'block' },
              pointerEvents: 'none',
            }}
          >
            <PatternBackground />
          </Box>

          <Stack
            spacing={3}
            sx={{
              position: 'relative',
              zIndex: 1,
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <IconContainer>
              <MagicStickIconFilled />
            </IconContainer>

            <Typography variant="h2" sx={{ width: '100%' }}>
              {HEADING}
            </Typography>

            <Typography variant="body1" sx={{ width: '100%' }}>
              {DESCRIPTION}
            </Typography>
          </Stack>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: { xs: '100%', md: 'auto' },
            flexShrink: 0,
            pr: { xs: 0, md: 5 },
          }}
        >
          <Box
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'relative',
              width: '100%',
              maxWidth: 360,
              mx: 'auto',
            }}
          >
            <Box
              key={activeIndex}
              sx={{
                width: '100%',
                animation:
                  'servicesPhotoSlideIn 450ms cubic-bezier(0.22, 1, 0.36, 1)',
                '@keyframes servicesPhotoSlideIn': {
                  from: {
                    opacity: 0,
                    transform: 'translateX(-28px) scale(0.985)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateX(0) scale(1)',
                  },
                },
              }}
            >
              <ServicePhoto {...PHOTOS[activeIndex]} width={288} height={346} />
            </Box>
          </Box>

          <Stack
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'relative',
              width: 844,
              height: 346,
            }}
          >
            {PHOTOS.map((photo, index) => {
              const slotIndex =
                (index - activeIndex + PHOTOS.length) % PHOTOS.length;

              const slotSize = SLOT_SIZES[slotIndex];
              const slotRight = SLOT_RIGHT_OFFSETS[slotIndex];

              return (
                <Box
                  key={photo.src}
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    right: 0,
                    zIndex: slotIndex === 1 ? 2 : 1,
                    transform: `translateX(-${slotRight}px) translateY(-50%)`,
                    transition:
                      'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
                    willChange: 'transform',
                  }}
                >
                  <ServicePhoto
                    {...photo}
                    width={slotSize.width}
                    height={slotSize.height}
                  />
                </Box>
              );
            })}
          </Stack>

          <IconButton
            aria-label="نمایش خدمت بعدی"
            onClick={handleNext}
            sx={{
              width: 46,
              height: 46,
              pb: 0.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: { xs: 'absolute', md: 'absolute' },
              zIndex: 10,
              top: { xs: '50%', md: '50%' },
              left: { xs: 10, md: '95.5%' },
              mt: 0,
              transform: {
                xs: 'translateY(-50%)',
                md: 'translate(-50%, -50%) rotate(180deg)',
              },
              border: '3px solid #f5f8fa',
              color: '#fff',
              background: theme =>
                `linear-gradient(229.52deg, ${theme.palette.secondary.main} -18.98%, ${theme.palette.primary.main} 121.29%)`,
              boxShadow: '0px 1px 2px -1px rgba(146,146,146,0.4)',
              '&:hover': {
                background: theme =>
                  `linear-gradient(229.52deg, ${theme.palette.secondary.main} -18.98%, ${theme.palette.primary.main} 121.29%)`,
                filter: 'brightness(1.05)',
              },
            }}
          >
            <Subtract size={34} direction="left" />
          </IconButton>
        </Box>
      </Stack>
    </Box>
  );
}
