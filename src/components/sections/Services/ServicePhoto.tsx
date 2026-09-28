'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface ServicePhotoProps {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
}

export default function ServicePhoto({
  src,
  alt,
  caption,
  width,
  height,
}: ServicePhotoProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: '100%', md: width },
        height: { xs: 'auto', md: height },
        aspectRatio: { xs: `${width} / ${height}`, md: 'auto' },
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0px 24px 48px rgba(0,46,37,0.12)',
        flexShrink: 0,
        transition: 'width 0.4s ease, height 0.4s ease',
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 900px) 100vw, 300px"
        style={{ objectFit: 'cover' }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          boxShadow: 'inset 0px 10px 30px rgba(0,0,0,0.32)',
        }}
      />
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to top, rgba(7,7,8,0.64), rgba(7,7,8,0) 60%)',
        }}
      />
      <Typography
        sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          color: '#fff',
          fontSize: 16,
          fontWeight: 800,
          lineHeight: '32px',
        }}
      >
        {caption}
      </Typography>
    </Box>
  );
}
