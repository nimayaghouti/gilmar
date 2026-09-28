'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { keyframes } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';

import ChatRoundLineGlyph from '@/components/icons/ChatRoundLineGlyph';
import IconContainer from '@/components/icons/IconContainer';

import Avatar from './Avatar';
import Dots from './Dots';
import QuoteCard from './QuoteCard';

const HEADING = 'گیلمار از نگاه مهمانان';
const DESCRIPTION =
  'تجربه واقعی مهمانان، بهترین روایت از آرامش، طبیعت و حال خوب گیلمار است.';

const SCATTERED = [
  { n: 3, left: '18.9%', top: 72, size: 54 },
  { n: 5, left: '20.9%', top: 208, size: 48 },
  { n: 1, left: '11%', top: 293, size: 54 },
  { n: 4, left: '22.4%', top: 428, size: 54 },
  { n: 1, left: '78.5%', top: 148, size: 54 },
  { n: 3, left: '90.2%', top: 227, size: 48 },
  { n: 2, left: '83.5%', top: 385, size: 54 },
];

const fadeIn = keyframes`
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: none; }
    `;

export const fadeInSx = {
  animation: `${fadeIn} 0.4s ease`,
  '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
};

export const SLIDE_AVATARS = [1, 2, 5, 3, 4];

export default function Testimonials() {
  const [active, setActive] = useState(2);
  const featured = SLIDE_AVATARS[active];

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
      <Box
        sx={{
          maxWidth: 732,
          mx: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <IconContainer>
          <ChatRoundLineGlyph />
        </IconContainer>
        <Typography
          variant="h2"
          component="h2"
          style={{ marginTop: '1.5rem!important' }}
        >
          {HEADING}
        </Typography>
        <Typography
          variant="body1"
          sx={{ textAlign: 'center' }}
          style={{ marginTop: '10px!important' }}
        >
          {DESCRIPTION}
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: '100%',
          maxWidth: 1169,
          height: 520,
          mx: 'auto',
          mt: 4,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            aspectRatio: '2338 / 1036',
          }}
        >
          <Image
            src="/images/testimonials/map-bg.png"
            alt=""
            fill
            sizes="1169px"
            style={{ objectFit: 'cover' }}
          />
        </Box>

        {SCATTERED.map(avatar => (
          <Box
            key={`${avatar.left}-${avatar.top}`}
            aria-hidden
            sx={{
              position: 'absolute',
              top: avatar.top,
              left: avatar.left,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Avatar n={avatar.n} size={avatar.size} />
          </Box>
        ))}

        <Box
          key={`featured-${active}`}
          sx={{
            ...fadeInSx,
            position: 'absolute',
            top: 91,
            left: '50%',
            ml: '-50px',
            mt: '-50px',
            zIndex: 2,
          }}
        >
          <Avatar n={featured} size={100} />
        </Box>

        <Box
          aria-live="polite"
          sx={{
            position: 'absolute',
            top: 161,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 500,
            maxWidth: '100%',
            zIndex: 1,
          }}
        >
          <QuoteCard key={active} />
        </Box>

        <Box
          sx={{
            position: 'absolute',
            top: 446,
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <Dots active={active} onSelect={setActive} />
        </Box>
      </Box>

      <Stack
        spacing={3}
        sx={{
          mt: 4,
          alignItems: 'center',
          display: { xs: 'flex', md: 'none' },
        }}
      >
        <Box key={`featured-m-${active}`} sx={fadeInSx}>
          <Avatar n={featured} size={80} />
        </Box>
        <Box
          aria-live="polite"
          sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <QuoteCard key={`m-${active}`} />
        </Box>
        <Dots active={active} onSelect={setActive} />
      </Stack>
    </Box>
  );
}
