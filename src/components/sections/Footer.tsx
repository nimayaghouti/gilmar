'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import LinkedInGlyph from '@/components/icons/LinkedInGlyph';
import TelegramGlyph from '@/components/icons/TelegramGlyph';
import TwitterXGlyph from '@/components/icons/TwitterXGlyph';
import YouTubeGlyph from '@/components/icons/YouTubeGlyph';

const LOGO_SRC = '/images/logo.png';
const MAP_SRC = '/images/footer/map.png';
const MAP_MASK_SRC = '/images/video/pattern-mask.png';

const DESCRIPTION =
  'اقامتگاه بوم‌گردی گیلمار، بزرگ‌ترین مجموعه اکولوژ شمال کشور با امکانات رفاهی و تفریحی متنوع، در فضایی منحصربه‌فرد و با مجوز رسمی میراث فرهنگی گیلان فعالیت می‌کند.';

const QUICK_LINKS = [
  'سوئیت‌ها و اقامت',
  'راهنمای مهمان‌ها',
  'درباره گیلمار',
  'مجله گیلمار',
];

const CONTACT_LINES = [
  'تلفن پشتیبانی: ۰۱۳۳۴۷۷۵۴۰۰ – ۰۱۳۳۴۷۷۵۴۱۱',
  'ایمیل: Info@Gilmar-Gilan.Com',
  'موقعیت گیلمار: گیلان، جاده رشت به فومن، روستای ملاسرا، خیابان کوزه‌گران، اقامتگاه گیلمار',
];

const COPYRIGHT = '© تمامی حقوق برای اقامتگاه بوم‌گردی گیلمار محفوظ است.';

const SOCIAL_ITEMS = [
  { label: 'X (Twitter)', Glyph: TwitterXGlyph },
  { label: 'YouTube', Glyph: YouTubeGlyph },
  { label: 'Telegram', Glyph: TelegramGlyph },
  { label: 'LinkedIn', Glyph: LinkedInGlyph },
];

const COLUMN_TITLE_SX = {
  fontSize: 16,
  fontWeight: 800,
  color: 'text.primary',
  lineHeight: '32px',
};

export default function Footer() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        component="footer"
        sx={{
          mx: 'auto',
          width: '100%',
          px: { xs: 3, md: 0 },
          pt: { xs: 6, md: 8 },
          pb: { xs: 6, md: 4 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            bottom: -400,
            left: { xs: '40%', md: 940 },
            width: 640,
            height: 640,
            borderRadius: '50%',
            filter: 'blur(140px)',
            bgcolor: '#C5D8FF',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <Box
          sx={{
            width: 'min(1280px, 100%)',
            mx: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Box
            sx={theme => ({
              position: 'relative',
              bgcolor: 'background.paper',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: theme.brand.shadows.halo,
              minHeight: { md: 276 },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'flex-start',
              gap: { xs: 3, md: 9 },
              p: 3,
              pe: { xs: 3, md: '388px' },
              pt: 6,
            })}
          >
            <Box
              sx={{
                width: { md: 314 },
                flexShrink: 0,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Image
                src={LOGO_SRC}
                alt="لوگوی اقامتگاه بوم‌گردی گیلمار"
                width={169}
                height={53}
                style={{ width: 169, height: 53, objectFit: 'contain' }}
              />
              <Typography variant="body1" sx={{ textAlign: 'justify' }}>
                {DESCRIPTION}
              </Typography>
            </Box>

            <Box sx={{ flexShrink: 0, marginTop: 2 }}>
              <Typography sx={COLUMN_TITLE_SX}>کاوش در گیلمار</Typography>
              <Box
                component="ul"
                sx={{ m: 0, mt: 1, p: 0, paddingInlineStart: '20px' }}
              >
                {QUICK_LINKS.map(link => (
                  <Box component="li" key={link}>
                    <Typography variant="body1">{link}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box sx={{ flex: 1, minWidth: 0, maxWidth: 420, marginTop: 2 }}>
              <Typography sx={COLUMN_TITLE_SX}>
                راه‌های ارتباط با گیلمار
              </Typography>
              {CONTACT_LINES.map(line => (
                <Typography key={line} variant="body1">
                  {line}
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                position: { xs: 'relative', md: 'absolute' },
                left: 0,
                top: 0,
                bottom: 0,
                width: { xs: '100%', md: 364 },
                height: { xs: 240, md: 'auto' },
                order: { xs: -1, md: 0 },
                WebkitMaskImage: `url(${MAP_MASK_SRC})`,
                maskImage: `url(${MAP_MASK_SRC})`,
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
              }}
            >
              <Image
                src={MAP_SRC}
                alt="نقشه موقعیت اقامتگاه گیلمار"
                fill
                sizes="(max-width: 900px) 100vw, 364px"
                style={{
                  objectFit: 'cover',
                  paddingRight: '30%',
                }}
              />
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  bgcolor: 'rgba(0, 0, 0, 0.08)',
                }}
              />
            </Box>
          </Box>

          <Box
            sx={theme => ({
              mt: 3,
              bgcolor: 'background.paper',
              border: `1px solid ${theme.palette.divider}`,
              borderRadius: { xs: 2, md: '9999px' },
              boxShadow: theme.brand.shadows.halo,
              px: 3,
              py: 2,
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
            })}
          >
            <Typography variant="body1">{COPYRIGHT}</Typography>

            <Box sx={{ display: 'flex', gap: 1.5, direction: 'ltr' }}>
              {SOCIAL_ITEMS.map(({ label, Glyph }) => (
                <Box
                  key={label}
                  component="button"
                  type="button"
                  aria-label={label}
                  sx={theme => ({
                    width: 40,
                    height: 40,
                    p: 0,
                    border: 'none',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    backgroundImage: `radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 70%), ${theme.brand.gradients.badge}`,
                    boxShadow:
                      '0px 1px 2px -1px rgba(146,146,146,0.4), inset 0px 1px 0px rgba(255,255,255,0.16)',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                    '&:focus-visible': {
                      outline: '2px solid #43A047',
                      outlineOffset: 2,
                    },
                  })}
                >
                  <Glyph />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
