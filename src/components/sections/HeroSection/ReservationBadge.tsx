'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const AVATARS = [
  '/images/avatars/guest-1.png',
  '/images/avatars/guest-2.png',
  '/images/avatars/guest-3.png',
];

const AVATAR_SIZE = 32;
const AVATAR_OVERLAP = 18;

export default function ReservationBadge() {
  return (
    <Stack
      direction="row"
      spacing={1.25}
      sx={{
        alignItems: 'center',
        position: 'absolute',
        zIndex: 4,
        bottom: { xs: 12, md: 20 },
        insetInlineEnd: 0,
        height: 40,
        pl: 2,
        pr: 1,
        bgcolor: '#fcfdfd',
        borderRadius: 9999,
        boxShadow: theme => theme.brand.shadows.halo,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          height: AVATAR_SIZE,
          width: AVATAR_SIZE + (AVATARS.length - 1) * AVATAR_OVERLAP,
        }}
      >
        {AVATARS.map((src, index) => (
          <Box
            key={src}
            component="img"
            src={src}
            alt=""
            sx={{
              position: 'absolute',
              top: 0,
              right: index * AVATAR_OVERLAP,
              width: AVATAR_SIZE,
              height: AVATAR_SIZE,
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #fcfdfd',
              zIndex: AVATARS.length - index,
            }}
          />
        ))}
      </Box>

      <Typography
        component="span"
        sx={{
          color: 'text.primary',
          fontSize: '14px',
          fontWeight: 800,
          lineHeight: 1,
          whiteSpace: 'nowrap',
        }}
      >
        ۱۲۰+ رزرو موفق
      </Typography>
    </Stack>
  );
}
