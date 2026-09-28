'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

interface RuleCardProps {
  icon: string;
  alt: string;
  title: string;
  description: string;
  mirrored?: boolean;
}

export default function RuleCard({
  icon,
  alt,
  title,
  description,
  mirrored = false,
}: RuleCardProps) {
  return (
    <Stack
      spacing="2px"
      sx={{
        width: { xs: '100%', sm: 256 },
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ position: 'relative', width: 128, height: 160, mb: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            inset: 0,
            borderRadius: '24px',
            bgcolor: '#fcfcfd',
            border: '1px solid #f4f5f6',
            boxShadow: '0px 40px 32px -24px rgba(15,15,15,0.12)',
            transform: `${mirrored ? 'rotate(10deg)' : 'rotate(-10deg)'}`,
          }}
        >
          <Box sx={{ position: 'relative', width: 108, height: 108 }}>
            <Image
              src={icon}
              alt={alt}
              fill
              sizes="108px"
              style={{ objectFit: 'contain' }}
            />
          </Box>
        </Box>
      </Box>

      <Typography
        component="h3"
        sx={{
          fontSize: 16,
          fontWeight: 800,
          color: 'text.primary',
          lineHeight: '32px',
          pt: 6,
        }}
      >
        {title}
      </Typography>
      <Typography variant="body1" sx={{ textAlign: 'center' }}>
        {description}
      </Typography>
    </Stack>
  );
}
