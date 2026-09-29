import Box from '@mui/material/Box';
import Button, { ButtonProps } from '@mui/material/Button';

import ArrowIcon from '../icons/ArrowIcon';

interface CtaButtonProps extends Omit<ButtonProps, 'children'> {
  label: string;
  iconSize?: number;
}

export default function CtaButton({
  label,
  sx,
  iconSize = 24,
  ...props
}: CtaButtonProps) {
  return (
    <Button
      variant="contained"
      {...props}
      sx={{
        minWidth: 0,
        height: 46,
        zIndex: 3,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        pl: 0.75,
        pr: 2,
        borderRadius: 9999,
        background: theme => theme.brand.gradients.cta,
        color: '#fff',
        fontFamily: 'inherit',
        fontSize: '14px',
        fontWeight: 800,
        lineHeight: 1,
        boxShadow: '0px 1px 2px -1px rgba(146,146,146,0.4)',
        '&:hover': {
          background: theme => theme.brand.gradients.cta,
          opacity: 0.94,
        },
        '&:focus-visible': {
          outline: '2px solid',
          outlineColor: 'primary.main',
          outlineOffset: 3,
        },
        ...sx,
      }}
    >
      <Box component="span">{label}</Box>

      <Box
        component="span"
        sx={{
          width: 34,
          height: 34,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          borderRadius: '50%',
          bgcolor: '#f5f8fa',
          color: '#26c98a',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.03)',
        }}
      >
        <ArrowIcon size={iconSize} />
      </Box>
    </Button>
  );
}
