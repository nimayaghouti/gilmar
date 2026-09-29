'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import ConfettiCluster from '@/components/backgrounds/ConfettiCluster';
import PatternBackground from '@/components/backgrounds/PatternBackground';
import EarthGlyph from '@/components/icons/EarthGlyph';
import IconContainer from '@/components/icons/IconContainer';
import LodgeIcon from '@/components/icons/LodgeIcon';
import MagicStickIcon from '@/components/icons/MagicStickIcon';
import CtaButton from '@/components/ui/CtaButton';

import CollagePhoto from './CollagePhoto';
import NameTagChip from './NameTagChip';

const HEADING = 'گیلمار؛ آرامش ناب در آغوش طبیعت گیلان';
const DESCRIPTION =
  'گیلمار با فضایی آرام، سرسبز و چشم‌اندازی زیبا از دریاچه‌ها، میزبان لحظاتی دلنشین و به‌یادماندنی برای شماست. طبیعت بکر تالابی، حضور پرندگان بومی و مهاجر، نزدیکی به جاذبه‌های گردشگری گیلان، مسیر دسترسی مناسب و انواع تفریحات و گشت‌های گیلان‌گردی، این اقامتگاه را به مقصدی متفاوت برای سفر تبدیل کرده است.';

const CHIP_ONE = 'اقامتگاه بوم‌گردی گیلمار';
const CHIP_TWO = 'تجربه اقامت اصیل شمال';

const COLLAGE_WIDTH = 560;
const COLLAGE_HEIGHT = 640;

const PHOTOS = [
  {
    src: '/images/about-us/photo-2.png',
    alt: 'نمای اقامتگاه گیلمار',
    width: 330,
    height: 332,
    top: 25,
    left: 115,
    zIndex: 2,
  },
  {
    src: '/images/about-us/photo-1.png',
    alt: 'نمای اقامتگاه گیلمار در غروب',
    width: 261,
    height: 293,
    top: 205,
    left: 40,
    zIndex: 2,
  },
  {
    src: '/images/about-us/photo-3.png',
    alt: 'پل چوبی اقامتگاه گیلمار',
    width: 261,
    height: 338,
    top: 230,
    left: 255,
    zIndex: 1,
  },
] as const;

export default function AboutUs() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 1280,
        mx: 'auto',
        px: { xs: 3, md: 5 },
        py: { xs: 8, md: 12 },
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
          }}
        >
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              top: -60,
              right: -40,
              zIndex: 0,
              display: { xs: 'none', md: 'block' },
              pointerEvents: 'none',
            }}
          >
            <PatternBackground />
          </Box>

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: { xs: 'center', md: 'flex-start' },
              gap: 3,
            }}
          >
            <IconContainer>
              <EarthGlyph />
            </IconContainer>
            <Typography variant="h2" sx={{ width: '100%' }}>
              {HEADING}
            </Typography>
            <Typography
              variant="body1"
              sx={{ width: '100%', textAlign: 'justify' }}
            >
              {DESCRIPTION}
            </Typography>
            <CtaButton label="اقامت در گیلمار" iconSize={20} />
          </Box>
        </Box>

        <Box
          sx={{
            position: 'relative',
            width: COLLAGE_WIDTH,
            height: COLLAGE_HEIGHT,
            flexShrink: 0,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <Box
            aria-hidden
            sx={{ position: 'absolute', top: -10, left: -20, zIndex: 0 }}
          >
            <ConfettiCluster />
          </Box>

          {PHOTOS.map(photo => (
            <CollagePhoto key={photo.src + photo.top} {...photo} />
          ))}

          <NameTagChip
            label={CHIP_ONE}
            icon={<LodgeIcon size={32} />}
            sx={{ position: 'absolute', top: 150, left: 25, zIndex: 3 }}
          />
          <NameTagChip
            label={CHIP_TWO}
            icon={<MagicStickIcon size={30} />}
            sx={{ position: 'absolute', top: 345, left: 185, zIndex: 3 }}
          />
        </Box>

        <Stack
          spacing={2}
          sx={{ display: { xs: 'flex', md: 'none' }, width: '100%' }}
        >
          {PHOTOS.map(photo => (
            <Box key={photo.src} sx={{ position: 'relative', width: '100%' }}>
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                style={{ width: '100%', height: 'auto', display: 'block' }}
                loading="eager"
              />
            </Box>
          ))}
          <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 1.5 }}>
            <NameTagChip label={CHIP_ONE} icon={<LodgeIcon size={22} />} />
            <NameTagChip label={CHIP_TWO} icon={<MagicStickIcon size={20} />} />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}
