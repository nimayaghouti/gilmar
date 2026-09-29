'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const BELOW_1300 = '@media (max-width: 1299.95px)';

export default function HeroCaption() {
  return (
    <Box
      sx={{
        position: 'absolute',
        zIndex: 4,
        bottom: { xs: 12, md: 20 },
        width: { xs: 210, md: 270 },
        minHeight: 68,
        px: 2,
        py: 1.5,
        display: 'flex',
        alignItems: 'center',
        borderRadius: '24px 24px 0 24px',
        [BELOW_1300]: {
          position: 'static',
          bottom: 'auto',
          zIndex: 'auto',
          width: 'auto',
          maxWidth: '100%',
          minHeight: 'unset',
          px: 0,
          py: 0,
        },
      }}
    >
      <Typography
        component="p"
        sx={{
          m: 0,
          color: '#000',
          fontSize: '14px',
          fontWeight: 600,
          lineHeight: '28px',
          textAlign: 'right',
          [BELOW_1300]: { textAlign: 'center' },
        }}
      >
        فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </Typography>
    </Box>
  );
}
