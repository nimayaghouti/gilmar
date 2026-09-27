'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import AppIcon from '@/components/ui/AppIcon';

const NAV_LINKS = [
  'خانه',
  'سوئیت‌ها و اقامت',
  'درباره گیلمار',
  'راهنمای مهمان‌ها',
  'مجله گیلمار',
  'تماس با ما',
];

export default function Navbar() {
  return (
    <Box
      component="nav"
      aria-label="منوی اصلی"
      sx={{
        position: 'relative',
        zIndex: 10,
        width: 'min(1280px, calc(100% - 32px))',
        height: 66,
        mx: 'auto',
        mt: { xs: 2, md: 5 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 1,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 9999,
        boxShadow: theme => theme.brand.shadows.halo,
      }}
    >
      <Box
        component="img"
        src="/images/logo.png"
        alt="اقامتگاه بوم‌گردی گیلمار"
        sx={{ width: 169, height: 53, display: 'block', objectFit: 'contain' }}
      />

      <Stack
        component="ul"
        direction="row"
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: { md: 3, lg: 4 },
          listStyle: 'none',
          m: 0,
          p: 0,
          display: { xs: 'none', md: 'flex' },
          minWidth: 0,
          whiteSpace: 'nowrap',
        }}
      >
        {NAV_LINKS.map(label => (
          <Box component="li" key={label} sx={{ flexShrink: 0 }}>
            <Box
              component="a"
              href="#"
              sx={{
                display: 'block',
                color: 'text.primary',
                fontSize: '14px',
                fontWeight: 600,
                lineHeight: '32px',
                textDecoration: 'none',
                transition: 'opacity 160ms ease',
                '&:hover': { opacity: 0.65 },
              }}
            >
              {label}
            </Box>
          </Box>
        ))}
      </Stack>

      <Box
        component="button"
        type="button"
        sx={{
          width: 152,
          height: 54,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 0.75,
          p: 0,
          border: 0,
          borderRadius: 9999,
          background: theme => theme.brand.gradients.cta,
          color: '#fff',
          fontFamily: 'inherit',
          fontSize: '14px',
          fontWeight: 800,
          lineHeight: 1,
          cursor: 'pointer',
          flexShrink: 0,
          transition:
            'transform 160ms ease, opacity 160ms ease, box-shadow 160ms ease',
          '&:hover': { opacity: 0.94, transform: 'translateY(-1px)' },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 3,
          },
        }}
      >
        <AppIcon name="solar:user-circle-bold" width={22} height={22} />
        <Box component="span">ورود یا ثبت‌نام</Box>
      </Box>
    </Box>
  );
}
