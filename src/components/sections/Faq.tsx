'use client';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { useState } from 'react';

import PatternBackground from '@/components/backgrounds/PatternBackground';
import FaqToggleGlyph from '@/components/icons/FaqToggleGlyph';
import IconContainer from '@/components/icons/IconContainer';
import QuestionCircleGlyph from '@/components/icons/QuestionCircleGlyph';

const HEADING = 'سوالات متداول مهمانان گیلمار';
const DESCRIPTION =
  'پاسخ رایج‌ترین سوالات درباره رزرو، اقامت و امکانات گیلمار را اینجا پیدا کنید تا با خیال راحت سفر خود را برنامه‌ریزی کنید.';

const QUESTION = 'امکان کنسلی یا تغییر تاریخ رزرو وجود دارد!';
const ANSWER =
  'در گیلمار امکان لغو یا تغییر تاریخ رزرو فراهم است، اما این موضوع بر اساس زمان اعلام درخواست و قوانین اقامتگاه انجام می‌شود. لطفاً برای بررسی دقیق شرایط و هماهنگی بهتر، قبل از تاریخ اقامت با پشتیبانی در ارتباط باشید.';

const FAQ_ITEMS = Array.from({ length: 5 }, () => ({
  question: QUESTION,
  answer: ANSWER,
}));

const ILLUSTRATION_SRC = '/images/faq/illustration.png';

export default function Faq() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>
      <Box
        component="section"
        sx={{
          mx: 'auto',
          width: '100%',
          maxWidth: 1440,
          px: { xs: 3, md: 0 },
          pt: 2,
          pb: { xs: 10, md: 12 },
          position: 'relative',
        }}
      >
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -5,
            right: -60,
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
            alignItems: { xs: 'stretch', md: 'flex-start' },
            gap: 5,
            position: 'relative',
            zIndex: 2,
          }}
        >
          <Stack
            spacing={2}
            sx={{ width: { xs: '100%', md: 620 }, textAlign: 'right' }}
          >
            <Box sx={{ alignSelf: { xs: 'center', md: 'flex-start' } }}>
              <IconContainer>
                <QuestionCircleGlyph />
              </IconContainer>
            </Box>

            <Typography variant="h2" component="h2">
              {HEADING}
            </Typography>

            <Typography variant="body1" style={{ marginTop: '6px!important' }}>
              {DESCRIPTION}
            </Typography>

            <Box
              sx={{
                position: 'relative',
                width: { xs: 280, sm: 360, md: 420 },
                maxWidth: '100%',
                alignSelf: 'center',
                mt: 5,
              }}
            >
              <Image
                src={ILLUSTRATION_SRC}
                alt=""
                aria-hidden
                width={399}
                height={363}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '95%',
                  height: 'auto',
                  filter: 'blur(90px)',
                  opacity: '.8',
                }}
              />
              <Image
                src={ILLUSTRATION_SRC}
                alt="تصویر تزئینی کارت‌های سفر و دوربین دوچشمی"
                width={420}
                height={382}
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
            </Box>
          </Stack>

          <Box
            sx={{
              width: { xs: '100%', md: 620 },
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {FAQ_ITEMS.map((item, index) => {
              const isExpanded = expandedIndex === index;
              const cardRadius = isExpanded
                ? '20px'
                : { xs: '49px', md: '33px' };
              return (
                <Accordion
                  key={index}
                  expanded={isExpanded}
                  onChange={(_, expanded) =>
                    setExpandedIndex(expanded ? index : null)
                  }
                  disableGutters
                  elevation={0}
                  sx={theme => ({
                    bgcolor: 'background.paper',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: cardRadius,
                    boxShadow: isExpanded
                      ? `${theme.brand.shadows.photoCard}, ${theme.brand.shadows.halo}`
                      : theme.brand.shadows.halo,
                    transition: 'border-radius 0.3s ease, box-shadow 0.3s ease',
                    overflow: 'hidden',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { margin: 0 },
                    '&:first-of-type, &:last-of-type': {
                      borderRadius: cardRadius,
                    },
                  })}
                >
                  <AccordionSummary
                    expandIcon={
                      <Box
                        aria-hidden
                        sx={theme => ({
                          width: 30,
                          height: 30,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          backgroundImage: `radial-gradient(100% 100% at 50% 0%, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 70%), ${theme.brand.gradients.badge}`,
                          boxShadow:
                            '0px 1px 2px -1px rgba(146,146,146,0.4), inset 0px 1px 0px rgba(255,255,255,0.16)',
                        })}
                      >
                        <FaqToggleGlyph expanded={isExpanded} />
                      </Box>
                    }
                    sx={{
                      minHeight: 'unset',
                      px: 2,
                      pt: isExpanded ? 3 : 2,
                      pb: isExpanded ? 0 : 2,
                      '& .MuiAccordionSummary-content': {
                        margin: 0,
                        alignItems: 'center',
                      },
                      '& .MuiAccordionSummary-expandIconWrapper': {
                        transform: 'none',
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 800,
                        color: 'text.primary',
                        lineHeight: '32px',
                      }}
                    >
                      {item.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 2, pt: 2, pb: 3 }}>
                    <Typography variant="body1" sx={{ textAlign: 'right' }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
