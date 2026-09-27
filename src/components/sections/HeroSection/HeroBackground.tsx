'use client';

import Box from '@mui/material/Box';

export default function HeroBackground() {
  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 640,
          height: 640,
          top: -140,
          insetInlineStart: 940,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #c5d8ff)',
          filter: 'blur(160px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 640,
          height: 640,
          top: -140,
          insetInlineEnd: 940,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #c5d8ff)',
          filter: 'blur(160px)',
        }}
      />
    </Box>
  );
}
