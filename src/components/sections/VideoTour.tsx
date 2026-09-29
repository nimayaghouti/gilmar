'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import PatternBackground from '@/components/backgrounds/PatternBackground';
import ClapperboardPlayGlyph from '@/components/icons/ClapperboardPlayGlyph';
import IconContainer from '@/components/icons/IconContainer';
import PlayTriangleIcon from '@/components/icons/PlayTriangleIcon';
import CtaButton from '@/components/ui/CtaButton';

const HEADING = 'تور ویدیویی اقامتگاه گیلمار';
const DESCRIPTION =
  'در این تور ویدیویی، گوشه‌ای از آرامش، طبیعت بکر و فضای گرم اقامتگاه گیلمار را از نزدیک تماشا کنید و پیش از سفر، حال‌وهوای دلنشین آن را تجربه کنید.';

export default function VideoTour() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        component="section"
        sx={{
          mx: 'auto',
          pb: { xs: 10, md: 12 },
          pt: { xs: 6, md: 0 },
          px: { xs: 3, md: 0 },
          position: 'relative',
          width: '100%',
          maxWidth: '1440px',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'block' },
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 130,
            right: -30,
            zIndex: 1,
            display: { xs: 'none', md: 'block' },
            pointerEvents: 'none',
            opacity: 0.6,
          }}
        >
          <PatternBackground />
        </Box>

        <Stack
          spacing={3}
          sx={{
            position: { xs: 'relative', md: 'absolute' },
            top: { xs: 'auto', md: '50%' },
            right: { xs: 'auto', md: '5%' },
            transform: { xs: 'none', md: 'translateY(-50%)' },
            width: { xs: '100%', md: 520 },
            alignItems: 'flex-start',
            textAlign: 'right',
            zIndex: 10,
            mb: { xs: 5, md: 0 },
            order: { xs: 1, md: 'unset' },
          }}
        >
          <Box sx={{ alignSelf: { xs: 'center', md: 'flex-start' }, mb: 1 }}>
            <IconContainer>
              <ClapperboardPlayGlyph />
            </IconContainer>
          </Box>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: '#1A1A1A',
              fontSize: { xs: '26px', md: '32px' },
              letterSpacing: '-1.4px',
            }}
          >
            {HEADING}
          </Typography>

          <Typography
            variant="body1"
            sx={{ color: '#555', lineHeight: 1.8, marginTop: '12px!important' }}
          >
            {DESCRIPTION}
          </Typography>

          <Box sx={{ mt: 2 }}>
            <CtaButton label="اقامت در گیلمار" iconSize={18} />
          </Box>
        </Stack>

        <Box
          sx={{
            height: { xs: '380px', sm: '450px', md: '760px' },
            position: 'relative',
            width: { xs: '100%', md: '1440px' },
            maxWidth: { xs: '500px', md: '1440px' },
            mx: { xs: 'auto', md: 0 },
            right: { xs: 0, md: '180px' },
            zIndex: 2,
            order: { xs: 2, md: 'unset' },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              borderRadius: '16px',
              overflow: 'hidden',
              WebkitMaskImage: 'url(/images/video/pattern-mask.png)',
              maskImage: 'url(/images/video/pattern-mask.png)',
              WebkitMaskPosition: 'center',
              maskPosition: 'center',
              WebkitMaskRepeat: 'no-repeat',
              maskRepeat: 'no-repeat',
              WebkitMaskSize: { xs: '100% 100%', md: 'auto' },
              maskSize: { xs: '100% 100%', md: 'auto' },
            }}
          >
            <Image
              src="/images/video/video-photo.jpg"
              alt="طبیعت اطراف اقامتگاه گیلمار"
              fill
              sizes="100vw"
              style={{
                objectFit: 'cover',
              }}
            />
            <Box
              aria-hidden
              sx={{
                position: 'absolute',
                inset: 1,
                background:
                  ' linear-gradient(0deg, rgba(7, 7, 8, 0.64) 0%, rgba(7, 7, 8, 0) 100%);',
              }}
            />
          </Box>

          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: '50%', md: '35%' },
              transform: 'translate(-50%, -50%)',
              width: { xs: 70, md: 120 },
              height: { xs: 70, md: 120 },
              borderRadius: '50%',
              border: 'none',
              bgcolor: 'rgba(255, 255, 255, 0.3)',
              zIndex: 3,
            }}
          />
          <Box
            component="button"
            type="button"
            aria-label="پخش ویدیوی گیلمار"
            sx={{
              position: 'absolute',
              top: '50%',
              left: { xs: '50%', md: '35%' },
              pl: 1,
              transform: 'translate(-50%, -50%)',
              width: { xs: 50, md: 78 },
              height: { xs: 50, md: 78 },
              borderRadius: '50%',
              border: 'none',
              bgcolor: '#ffffff',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 3,
              transition: 'transform 0.3s ease',
              '&:hover': { transform: 'translate(-50%, -50%) scale(1.05)' },
            }}
          >
            <PlayTriangleIcon size={22} />
          </Box>
        </Box>

        <Box
          component="img"
          src="/images/video/compass.png"
          alt=""
          aria-hidden
          sx={{
            position: 'absolute',
            width: { xs: 110, md: 140 },
            height: 'auto',
            left: { xs: '80%', md: '55%' },
            bottom: { xs: 8, md: '9%' },
            transform: 'translateX(-50%)',
            pointerEvents: 'none',
            zIndex: 4,
          }}
        />
      </Box>
    </Box>
  );
}
