'use client';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import type { Theme } from '@mui/material/styles';
import type { SystemStyleObject } from '@mui/system';
import { useEffect, useState } from 'react';

import UserCircleGlyph from '@/components/icons/UserCircleGlyph';

const NAV_LINKS = [
  'خانه',
  'سوئیت‌ها و اقامت',
  'درباره گیلمار',
  'راهنمای مهمان‌ها',
  'مجله گیلمار',
  'تماس با ما',
];

const loginButtonSx = (theme: Theme): SystemStyleObject<Theme> => ({
  height: 54,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 0.75,
  p: 0,
  border: 0,
  borderRadius: 9999,
  background: theme.brand.gradients.cta,
  color: '#fff',
  fontFamily: 'inherit',
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: 1,
  cursor: 'pointer',
  flexShrink: 0,
  transition: 'transform 160ms ease, opacity 160ms ease, box-shadow 160ms ease',
  '&:hover': { opacity: 0.94, transform: 'translateY(-1px)' },
  '&:focus-visible': {
    outline: '2px solid',
    outlineColor: 'primary.main',
    outlineOffset: 3,
  },
});

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [menuOpen]);

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
        sx={{
          width: { xs: 128, md: 169 },
          height: { xs: 40, md: 53 },
          display: 'block',
          objectFit: 'contain',
        }}
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
        sx={theme => ({
          ...loginButtonSx(theme),
          width: 152,
          display: { xs: 'none', md: 'flex' },
        })}
      >
        <UserCircleGlyph size={22} />
        <Box component="span">ورود یا ثبت‌نام</Box>
      </Box>

      <Box
        component="button"
        type="button"
        aria-label={menuOpen ? 'بستن منو' : 'باز کردن منو'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen(open => !open)}
        sx={{
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '5px',
          width: 44,
          height: 44,
          p: 0,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 9999,
          bgcolor: 'background.paper',
          cursor: 'pointer',
          flexShrink: 0,
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2,
          },
        }}
      >
        {[0, 1, 2].map(index => (
          <Box
            key={index}
            component="span"
            sx={{
              display: 'block',
              width: 18,
              height: 2,
              borderRadius: 1,
              bgcolor: 'text.primary',
              transition: 'transform 200ms ease, opacity 200ms ease',
              ...(menuOpen
                ? [
                    { transform: 'translateY(7px) rotate(45deg)' },
                    { opacity: 0 },
                    { transform: 'translateY(-7px) rotate(-45deg)' },
                  ][index]
                : {}),
            }}
          />
        ))}
      </Box>

      {menuOpen && (
        <>
          <Box
            aria-hidden
            onClick={() => setMenuOpen(false)}
            sx={{
              position: 'fixed',
              inset: 0,
              zIndex: 19,
              bgcolor: 'rgba(15, 15, 15, 0.24)',
            }}
          />
          <Box
            id="mobile-menu"
            sx={theme => ({
              position: 'absolute',
              top: 'calc(100% + 8px)',
              right: 0,
              left: 0,
              zIndex: 20,
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              boxShadow: theme.brand.shadows.depth3,
              p: 1.5,
              display: { md: 'none' },
            })}
          >
            <Stack
              component="ul"
              spacing={0.5}
              sx={{ listStyle: 'none', m: 0, p: 0 }}
            >
              {NAV_LINKS.map(label => (
                <Box component="li" key={label}>
                  <Box
                    component="a"
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    sx={theme => ({
                      display: 'block',
                      px: 2,
                      borderRadius: 12,
                      color: 'text.primary',
                      fontSize: '14px',
                      fontWeight: 600,
                      lineHeight: '32px',
                      textDecoration: 'none',
                      transition: 'background-color 160ms ease',
                      '&:hover': { bgcolor: theme.brand.neutrals.n7 },
                    })}
                  >
                    {label}
                  </Box>
                </Box>
              ))}
            </Stack>
            <Box
              component="button"
              type="button"
              sx={theme => ({
                ...loginButtonSx(theme),
                width: '100%',
                mt: 1.5,
              })}
            >
              <UserCircleGlyph size={22} />
              <Box component="span">ورود یا ثبت‌نام</Box>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
