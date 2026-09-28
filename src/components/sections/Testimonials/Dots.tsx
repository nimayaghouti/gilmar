import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { SLIDE_AVATARS } from './index';

interface DotsProps {
  active: number;
  onSelect: (index: number) => void;
}

export default function Dots({ active, onSelect }: DotsProps) {
  return (
    <Stack
      direction="row"
      role="group"
      aria-label="انتخاب نظر"
      sx={{ gap: '5px' }}
    >
      {SLIDE_AVATARS.map((_, index) => (
        <Box
          key={index}
          component="button"
          type="button"
          onClick={() => onSelect(index)}
          aria-label={`نظر ${index + 1}`}
          aria-current={index === active}
          sx={{
            position: 'relative',
            width: 6,
            height: 6,
            p: 0,
            border: 0,
            borderRadius: '50%',
            cursor: 'pointer',
            background: theme =>
              index === active
                ? theme.brand.gradients.badge
                : 'rgba(105,118,135,0.3)',
            '&::after': { content: '""', position: 'absolute', inset: -8 },
            '&:focus-visible': {
              outline: '2px solid',
              outlineColor: 'primary.main',
              outlineOffset: 4,
            },
          }}
        />
      ))}
    </Stack>
  );
}
