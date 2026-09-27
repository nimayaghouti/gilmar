'use client';

import { Icon, IconProps } from '@iconify/react';

interface AppIconProps extends Omit<IconProps, 'icon'> {
  name: string;
}

export default function AppIcon({
  name,
  width = 24,
  height = 24,
  ...props
}: AppIconProps) {
  return <Icon icon={name} width={width} height={height} {...props} />;
}
