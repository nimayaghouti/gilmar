import Image from 'next/image';

interface LodgeIconProps {
  size?: number;
}

export default function LodgeIcon({ size = 22 }: LodgeIconProps) {
  return (
    <Image
      src="/icons/lodge.png"
      alt=""
      width={160}
      height={160}
      style={{ width: size, height: size, display: 'block' }}
    />
  );
}
