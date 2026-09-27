import Image from 'next/image';

interface MagicStickIconProps {
  size?: number;
}

export default function MagicStickIcon({ size = 20 }: MagicStickIconProps) {
  return (
    <Image
      src="/icons/magic-stick.png"
      alt=""
      width={160}
      height={160}
      style={{ width: size, height: size, display: 'block' }}
    />
  );
}
