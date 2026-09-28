'use client';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';

import PatternBackground from '@/components/backgrounds/PatternBackground';
import BoxMinimalisticGlyph from '@/components/icons/BoxMinimalisticGlyph';
import IconContainer from '@/components/icons/IconContainer';
import CtaButton from '@/components/ui/CtaButton';

import SlideDots from './SlideDots';

const HEADING = 'پکیج‌های ویژه اقامت در گیلمار';
const DESCRIPTION =
  'پکیج‌های ویژه ما ترکیبی از اقامت آرام، غذاهای محلی و تفریحات هیجان‌انگیز در دل طبیعت است.';
const GALLERY_CAPTION = 'تجربه‌ی اقامتی اصیل در دل طبیعت شمال';

const GALLERY_MASK_SRC = '/images/packages/gallery-mask.png';

type PackageItem = {
  label: string;
  iconSrc: string;
};

type PackageSlide = {
  image: string;
  title: string;
  includes: string;
  price: string;
  items: PackageItem[];
};

const PACKAGES: PackageSlide[] = [
  {
    image: '/images/packages/package-1.png',
    title: 'پکیج رمانتیک دو نفره',
    includes: 'شامل: ۱ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری',
    price: 'قیمت: ۲۳۰۰۰۰۰ تومان',
    items: [
      { label: '۱ شب اقامت', iconSrc: '/images/packages/item-stay.png' },
      { label: 'صبحانه', iconSrc: '/images/packages/item-breakfast.png' },
      { label: 'قایق‌سواری', iconSrc: '/images/packages/item-kayak.png' },
      { label: 'تور جنگل‌نوردی', iconSrc: '/images/packages/item-forest.png' },
    ],
  },
  {
    image: '/images/packages/package-2.png',
    title: 'پکیج خانواده چهار نفره',
    includes: 'شامل: ۲ شب اقامت + صبحانه + قایق‌سواری + تور جنگل‌نوردی',
    price: 'قیمت: ۴۵۰۰۰۰۰ تومان',
    items: [
      { label: '۲ شب اقامت', iconSrc: '/images/packages/item-stay.png' },
      { label: 'صبحانه', iconSrc: '/images/packages/item-breakfast.png' },
      { label: 'قایق‌سواری', iconSrc: '/images/packages/item-kayak.png' },
      { label: 'تور جنگل‌نوردی', iconSrc: '/images/packages/item-forest.png' },
    ],
  },
  {
    image: '/images/packages/package-3.png',
    title: 'پکیج ماجراجویی در طبیعت',
    includes: 'شامل: ۱ شب اقامت + تور جنگل‌نوردی + قایق‌سواری + صبحانه',
    price: 'قیمت: ۱۹۰۰۰۰۰ تومان',
    items: [
      { label: '۱ شب اقامت', iconSrc: '/images/packages/item-stay.png' },
      { label: 'تور جنگل‌نوردی', iconSrc: '/images/packages/item-forest.png' },
      { label: 'قایق‌سواری', iconSrc: '/images/packages/item-kayak.png' },
      { label: 'صبحانه', iconSrc: '/images/packages/item-breakfast.png' },
    ],
  },
  {
    image: '/images/packages/package-4.png',
    title: 'پکیج آرامش و خلوت',
    includes: 'شامل: ۳ شب اقامت + صبحانه + تور جنگل‌نوردی + قایق‌سواری',
    price: 'قیمت: ۶۲۰۰۰۰۰ تومان',
    items: [
      { label: '۳ شب اقامت', iconSrc: '/images/packages/item-stay.png' },
      { label: 'صبحانه', iconSrc: '/images/packages/item-breakfast.png' },
      { label: 'تور جنگل‌نوردی', iconSrc: '/images/packages/item-forest.png' },
      { label: 'قایق‌سواری', iconSrc: '/images/packages/item-kayak.png' },
    ],
  },
];

const DIVIDER_SX = {
  width: '100%',
  borderTop: '1px dashed #D9DEE2',
};

export default function Packages() {
  const [activeSlide, setActiveSlide] = useState(0);
  const activePackage = PACKAGES[activeSlide];

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        component="section"
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 1440,
          px: { xs: 3, md: 0 },
          pt: { xs: 3, md: 6 },
          pb: { xs: 10, md: 12 },
          position: 'relative',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: 10,
            right: -20,
            zIndex: 1,
            display: { xs: 'none', md: 'block' },
            pointerEvents: 'none',
            opacity: 0.6,
          }}
        >
          <PatternBackground />
        </Box>

        <Box
          sx={{
            mx: 'auto',
            width: 'min(1280px, 100%)',
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'stretch', md: 'center' },
            gap: { xs: 6, md: 6 },
          }}
        >
          <Stack
            spacing={3}
            sx={{
              width: { xs: '100%', md: 620 },
              textAlign: 'right',
              zIndex: 2,
            }}
          >
            <Box sx={{ alignSelf: 'flex-start' }}>
              <IconContainer>
                <BoxMinimalisticGlyph />
              </IconContainer>
            </Box>

            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 800,
                color: '#1A1A1A',
                fontSize: { xs: '26px', md: '32px' },
                letterSpacing: '-1.4px',
              }}
            >
              {HEADING}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: '#4C4C4D',
                fontSize: 14,
                fontWeight: 600,
                lineHeight: '32px',
                marginTop: '12px!important',
              }}
            >
              {DESCRIPTION}
            </Typography>

            <Box sx={DIVIDER_SX} />

            <Typography
              sx={{
                color: '#1A1A1A',
                fontSize: 16,
                fontWeight: 800,
                lineHeight: '32px',
              }}
            >
              {activePackage.title}
            </Typography>

            <Typography
              sx={{
                color: '#4C4C4D',
                fontSize: 14,
                fontWeight: 600,
                lineHeight: '32px',
                mt: '0px!important',
              }}
            >
              {activePackage.includes}
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: { xs: 'flex-start', md: 'space-between' },
                gap: 2,
              }}
            >
              {activePackage.items.map(item => (
                <Box
                  key={item.label}
                  sx={{
                    width: 116,
                    height: 116,
                    bgcolor: '#FCFCFD',
                    border: '1px solid #EEF3F6',
                    borderRadius: '12px',
                    boxShadow:
                      '0px 24px 48px rgba(0,46,37,0.12), 0px 0px 0px 6px #FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 0.5,
                    p: 1,
                  }}
                >
                  <Image
                    src={item.iconSrc}
                    alt=""
                    aria-hidden
                    width={52}
                    height={52}
                    style={{ objectFit: 'contain' }}
                  />
                  <Typography
                    sx={{
                      color: '#4C4C4D',
                      fontSize: 14,
                      fontWeight: 600,
                      lineHeight: '20px',
                      textAlign: 'center',
                    }}
                  >
                    {item.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={DIVIDER_SX} />

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 2,
              }}
            >
              <Typography
                sx={{ color: '#43A047', fontSize: 16, fontWeight: 800 }}
              >
                {activePackage.price}
              </Typography>
              <CtaButton label="همین حالا رزرو کن" iconSize={18} />
            </Box>
          </Stack>

          <Box
            sx={{
              position: 'relative',
              width: { xs: '100%', md: 602 },
              height: { xs: 460, sm: 620, md: 815 },
              flexShrink: 0,
              mx: { xs: 'auto', md: 0 },
              zIndex: 2,
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                borderRadius: '24px',
                overflow: 'hidden',
                WebkitMaskImage: `url(${GALLERY_MASK_SRC})`,
                maskImage: `url(${GALLERY_MASK_SRC})`,
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
              }}
            >
              {PACKAGES.map((pkg, index) => (
                <Image
                  key={pkg.image}
                  src={pkg.image}
                  alt={
                    index === activeSlide ? 'نمای اقامتگاه بوم‌گردی گیلمار' : ''
                  }
                  aria-hidden={index === activeSlide ? undefined : true}
                  fill
                  sizes="(max-width: 900px) 100vw, 602px"
                  style={{
                    objectFit: 'cover',
                    opacity: index === activeSlide ? 1 : 0,
                    transition: 'opacity 0.6s ease',
                  }}
                />
              ))}
            </Box>

            <Box
              sx={{
                position: 'absolute',
                top: 90,
                left: -20,
                zIndex: 3,
                maxWidth: 160,
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Typography
                sx={{
                  color: '#1A1A1A',
                  fontSize: 14,
                  fontWeight: 600,
                  lineHeight: '32px',
                  textAlign: 'center',
                  letterSpacing: '1.4px',
                }}
              >
                {GALLERY_CAPTION}
              </Typography>
            </Box>

            <SlideDots
              labels={PACKAGES.map(pkg => pkg.title)}
              activeIndex={activeSlide}
              onSelect={setActiveSlide}
              sx={{
                display: { xs: 'none', md: 'flex' },
                position: 'absolute',
                bottom: 12,
                left: 20,
                zIndex: 3,
              }}
            />
          </Box>

          <SlideDots
            labels={PACKAGES.map(pkg => pkg.title)}
            activeIndex={activeSlide}
            onSelect={setActiveSlide}
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'center',
              mt: 3,
            }}
            dotSx={{ boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)' }}
          />

          <Typography
            sx={{
              display: { xs: 'block', md: 'none' },
              mt: 2,
              color: '#1A1A1A',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: '32px',
              textAlign: 'center',
              letterSpacing: '1.4px',
            }}
          >
            {GALLERY_CAPTION}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
