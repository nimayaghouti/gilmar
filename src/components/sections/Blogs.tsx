'use client';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import PatternBackground from '@/components/backgrounds/PatternBackground';
import IconContainer from '@/components/icons/IconContainer';
import PlateGlyph from '@/components/icons/PlateGlyph';
import GrainOverlay from '@/components/ui/GrainOverlay';

const HEADING = 'مجله و مقالات گیلمار؛ روایت سفر، طبیعت و آرامش';
const DESCRIPTION =
  'در مجله گیلمار، خواندنی‌هایی درباره سفر، طبیعت، فرهنگ محلی و تجربه اقامتی دلنشین را دنبال کنید.';

const ARTICLE = {
  image: '/images/blogs/article-1.png',
  title: '۱۰ تجربه‌ای که نباید در طبیعت شمال از دست بدهید',
  excerpt:
    'از قدم‌زدن در جنگل‌های مه‌آلود تا نوشیدن چای کنار شالیزار، در این مقاله با لذت‌های ساده و آرامش‌بخش طبیعت...',
};

const ARTICLE_CARDS = [ARTICLE, ARTICLE, ARTICLE];

export default function Blogs() {
  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        component="section"
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 1440,
          px: { xs: 3, md: 0 },
          pt: 2,
          pb: { xs: 10, md: 12 },
          position: 'relative',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 10,
            left: -20,
            zIndex: 1,
            display: { xs: 'none', md: 'block' },
            pointerEvents: 'none',
            opacity: 0.6,
          }}
        >
          <PatternBackground />
        </Box>

        <Stack
          spacing={2}
          sx={{
            maxWidth: 732,
            mx: 'auto',
            mb: 5,
            alignItems: 'center',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <IconContainer>
            <PlateGlyph />
          </IconContainer>

          <Typography variant="h2" component="h2">
            {HEADING}
          </Typography>

          <Typography variant="body1" style={{ marginTop: '10px!important' }}>
            {DESCRIPTION}
          </Typography>
        </Stack>

        <Box
          sx={{
            maxWidth: 1280,
            mx: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: '28px',
            position: 'relative',
            zIndex: 2,
          }}
        >
          {ARTICLE_CARDS.map((article, index) => (
            <Box
              key={`article-${index}`}
              component="article"
              sx={theme => ({
                position: 'relative',
                flex: { md: '1 1 0' },
                minWidth: 0,
                height: { xs: 420, sm: 482 },
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: theme.brand.shadows.photoCard,
              })}
            >
              <Image
                src={article.image}
                alt="اقامتگاه بوم‌گردی گیلمار در غروب"
                fill
                sizes="(max-width: 900px) 100vw, 408px"
                style={{ objectFit: 'cover' }}
              />
              <Box
                aria-hidden
                sx={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(0deg, rgba(7, 7, 8, 0.88) 0%, rgba(7, 7, 8, 0) 100%)',
                }}
              />
              <GrainOverlay />
              <Box
                aria-hidden
                sx={theme => ({
                  position: 'absolute',
                  inset: 0,
                  boxShadow: theme.brand.shadows.photoCardInset,
                  pointerEvents: 'none',
                })}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'right',
                  zIndex: 2,
                }}
              >
                <Typography variant="h3" sx={{ color: 'common.white' }}>
                  {article.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.72)',
                    textAlign: 'justify',
                  }}
                >
                  {article.excerpt}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
