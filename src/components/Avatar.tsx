'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { getNameInitials } from '~/helpers';

type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  className?: string;
  name: string;
  src?: string | null;
  size?: AvatarSize;
}

export function Avatar({
  className,
  name,
  src,
  size = 'md',
}: AvatarProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const classes = {
    root: clsx(
      'relative inline-block overflow-hidden rounded-full',
      {
        'h-8 w-8': size === 'sm',
        'h-12 w-12': size === 'md',
        'h-20 w-20': size === 'lg',
        'h-32 w-32': size === 'xl',
      },
      className
    ),
    image: clsx('object-cover', isLoading && 'opacity-0'),
    placeholder: clsx(
      'flex h-full w-full items-center justify-center bg-secondary-200 leading-none text-white',
      {
        'text-sm': size === 'sm',
        'text-lg': size === 'md',
        'text-2xl': size === 'lg',
        'text-3xl': size === 'xl',
      }
    ),
  };

  return (
    <div className={classes.root}>
      {isLoading && (
        <div className={classes.placeholder}>{getNameInitials(name)}</div>
      )}
      {src && (
        <Image
          className={classes.image}
          src={src}
          alt={name}
          fill
          onLoadingComplete={() => setIsLoading(false)}
        />
      )}
    </div>
  );
}
