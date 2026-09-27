import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

interface CollagePhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  top: number;
  left: number;
  zIndex: number;
}

export default function CollagePhoto({
  src,
  alt,
  width,
  height,
  top,
  left,
  zIndex,
}: CollagePhotoProps) {
  const theme = useTheme();
  return (
    <Box sx={{ position: 'absolute', top, left, width, height, zIndex }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{
          width: '100%',
          height: '100%',
          display: 'block',
          filter: `drop-shadow(${theme.brand.shadows.photoCard})`,
        }}
        loading="eager"
      />
    </Box>
  );
}
