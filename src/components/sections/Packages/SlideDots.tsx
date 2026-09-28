import Box from '@mui/material/Box';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';

type SlideDotsProps = {
  labels: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
  sx?: SystemStyleObject<Theme>;
  dotSx?: SystemStyleObject<Theme>;
};

export default function SlideDots({
  labels,
  activeIndex,
  onSelect,
  sx,
  dotSx,
}: SlideDotsProps) {
  return (
    <Box sx={{ display: 'flex', gap: 2, direction: 'ltr', ...sx }}>
      {labels.map((label, index) => (
        <Box
          key={label}
          component="button"
          type="button"
          aria-label={label}
          aria-current={index === activeIndex ? true : undefined}
          onClick={() => onSelect(index)}
          sx={{
            width: 68,
            height: 6,
            borderRadius: '9999px',
            border: 'none',
            p: 0,
            bgcolor: '#FFFFFF',
            opacity: index === activeIndex ? 1 : 0.5,
            cursor: 'pointer',
            transition: 'opacity 0.3s ease',
            '&:focus-visible': {
              outline: '2px solid #43A047',
              outlineOffset: 2,
            },
            ...dotSx,
          }}
        />
      ))}
    </Box>
  );
}
