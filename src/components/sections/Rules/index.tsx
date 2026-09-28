'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import PatternBackground from '@/components/backgrounds/PatternBackground';
import BoltGlyph from '@/components/icons/BoltGlyph';
import IconContainer from '@/components/icons/IconContainer';

import DashedConnector from './DashedConnector';
import RuleCard from './RuleCard';

const HEADING = 'همراهی برای حفظ آرامش و طبیعت گیلمار';
const DESCRIPTION =
  'برای حفظ آرامش، نظم و تجربه‌ای دلنشین برای همه مهمانان، لطفاً قوانین اقامتگاه گیلمار را پیش از رزرو مطالعه و رعایت فرمایید.';

const RULES = [
  {
    icon: '/icons/tent.png',
    alt: 'چادر و ماه، نماد مراقبت از وسایل',
    title: 'مراقبت از وسایل اقامتگاه',
    description:
      'مهمانان عزیز مسئول نگهداری از تجهیزات و وسایل داخل اقامتگاه در طول مدت اقامت هستند.',
  },
  {
    icon: '/icons/binoculars.png',
    alt: 'دوربین شکاری، نماد حفظ آرامش',
    title: 'حفظ آرامش اقامتگاه',
    description:
      'برای حفظ فضای آرام و دلنشین گیلمار، لطفاً از ایجاد سر‌وصدای زیاد به‌ویژه در ساعات شب خودداری کنید.',
  },
  {
    icon: '/icons/van.png',
    alt: 'ون و نقشه، نماد حفظ طبیعت',
    title: 'حفظ طبیعت و محیط زیست',
    description:
      'گیلمار در دل طبیعت قرار دارد؛ لطفاً در حفظ محیط‌زیست، فضای سبز و منابع طبیعی همراه ما باشید.',
  },
] as const;

export default function Rules() {
  return (
    <Box
      component="section"
      sx={{
        maxWidth: 1280,
        mx: 'auto',
        px: { xs: 3, md: 5 },
        pb: { xs: 8, md: 12 },
      }}
    >
      <Stack
        spacing={2}
        sx={{
          maxWidth: 732,
          mx: 'auto',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <IconContainer>
          <BoltGlyph />
        </IconContainer>
        <Typography variant="h2" sx={{ textAlign: 'center', pt: 1 }}>
          {HEADING}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center' }}>
          {DESCRIPTION}
        </Typography>
      </Stack>

      <Box sx={{ position: 'relative', mt: 6 }}>
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -100,
            left: -140,
            zIndex: 0,
            display: { xs: 'none', md: 'block' },
          }}
        >
          <PatternBackground />
        </Box>

        <DashedConnector />

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          sx={{
            position: 'relative',
            zIndex: 1,
            justifyContent: 'center',
            gap: 16,
          }}
        >
          {RULES.map((rule, index) => (
            <RuleCard
              key={rule.title}
              {...rule}
              mirrored={index % 2 !== 0 && true}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
