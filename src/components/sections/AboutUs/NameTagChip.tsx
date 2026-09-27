import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

interface NameTagChipProps {
  label: string;
  icon: ReactNode;
  sx?: SxProps<Theme>;
}

export default function NameTagChip({ label, icon, sx }: NameTagChipProps) {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.5,
        p: 1,
        pl: 2,
        borderRadius: 9999,
        background:
          'linear-gradient(69deg, #fcfcfd 36.5%, rgba(252,252,253,0.83) 98.8%)',
        backdropFilter: 'blur(16px)',
        boxShadow: theme => theme.brand.shadows.chip,
        whiteSpace: 'nowrap',
        ...sx,
      }}
    >
      <Box
        sx={{
          width: 48,
          height: 48,
          borderRadius: '50%',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          background: theme => theme.brand.gradients.badge,
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>
        {label}
      </Typography>
    </Box>
  );
}
