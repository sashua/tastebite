'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { getNameInitials } from '~/common/helpers';

interface AvatarProps {
  className?: string;
  name: string;
  src?: string;
}

export function Avatar({ className, name, src }: AvatarProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const classes = {
    root: clsx('relative h-8 w-8 overflow-hidden rounded-full', className),
    image: clsx('object-cover', isLoading && 'opacity-0'),
    placeholder:
      'flex h-full w-full items-center justify-center bg-secondary-200 text-sm font-semibold leading-none text-white',
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
