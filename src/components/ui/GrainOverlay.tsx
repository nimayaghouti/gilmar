'use client';

import { useId } from 'react';

import Box from '@mui/material/Box';

export default function GrainOverlay() {
  const filterId = useId();

  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        mixBlendMode: 'luminosity',
        opacity: 0.3,
        pointerEvents: 'none',
        filter: `url(#${filterId})`,
      }}
    >
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <filter id={filterId}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={0.85}
            numOctaves={3}
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 .2 0"
          />
        </filter>
      </svg>
    </Box>
  );
}
