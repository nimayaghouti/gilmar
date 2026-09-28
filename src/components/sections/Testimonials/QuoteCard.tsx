import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import QuoteIcon from '@/components/icons/QuoteIcon';

import { fadeInSx } from './index';

const QUOTE =
  'اقامت در گیلمار یکی از بهترین تجربه‌های سفر من بود. فضای کاملاً آرام، طبیعت بکر و مهمان‌نوازی صمیمی باعث شد چند روزی که اینجا بودم واقعاً از هیاهوی شهر دور بشم.';
const NAME = 'احسان عبدی پور';
const ROLE = 'مهمان';

export default function QuoteCard() {
  return (
    <Box
      sx={{
        ...fadeInSx,
        width: '100%',
        maxWidth: 500,
        p: 3,
        borderRadius: 1,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: theme =>
          `${theme.brand.shadows.photoCard}, ${theme.brand.shadows.halo}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <QuoteIcon size={28} />
      <Typography
        variant="body1"
        component="blockquote"
        sx={{ m: 0, mt: 2, textAlign: 'center' }}
      >
        {QUOTE}
      </Typography>
      <Typography variant="h3" component="p" sx={{ mt: 3 }}>
        {NAME}
      </Typography>
      <Typography variant="body1" sx={{ mt: -0.5 }}>
        {ROLE}
      </Typography>
    </Box>
  );
}
