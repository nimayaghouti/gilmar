import Box from '@mui/material/Box';
import Image from 'next/image';

export default function Avatar({ n, size }: { n: number; size: number }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: size,
        height: size,
        borderRadius: '50%',
        overflow: 'hidden',
        border: '3px solid #fff',
        bgcolor: '#fff',
        flexShrink: 0,
      }}
    >
      <Image
        src={`/images/avatars/guest-${n}.png`}
        alt=""
        fill
        sizes={`${size}px`}
        style={{ objectFit: 'cover' }}
      />
    </Box>
  );
}
