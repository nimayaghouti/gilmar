'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface RoomCardProps {
  src: string;
  alt: string;
  title: string;
  price: string;
}

export default function RoomCard({ src, alt, title, price }: RoomCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', sm: 302 },
        height: { xs: 'auto', sm: 302 },
        aspectRatio: { xs: '1 / 1', sm: 'auto' },
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0px 24px 48px 0px #002E251F',
        flexShrink: 0,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 600px) 100vw, 302px"
        style={{ objectFit: 'cover' }}
      />

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          boxShadow: '0px 10px 30px 0px #00000052 inset',
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(0deg, rgba(7, 7, 8, 0.72) 0%, rgba(7, 7, 8, 0) 100%)',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          p: 2,
          textAlign: 'right',
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 800,
            color: '#fff',
            lineHeight: '32px',
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 600,
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '32px',
          }}
        >
          {price}
        </Typography>
      </Box>
    </Box>
  );
}
