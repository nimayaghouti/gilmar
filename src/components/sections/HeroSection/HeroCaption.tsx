'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
        }}
      >
        فرار از شلوغی شهر و تجربه‌ی اقامتی اصیل در دل طبیعت شمال
      </Typography>
    </Box>
  );
}
