'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import { getNameInitials } from '~/common/helpers';

interface Props {
  className?: string;
  name: string;
  src?: string;
}

export function Avatar({ className, name, src }: Props): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const classes = {
    wrapper: clsx('relative h-8 w-8 overflow-hidden rounded-full', className),
    image: clsx('object-cover', isLoading && 'opacity-0'),
  };

  return (
    <div className={classes.wrapper}>
      {isLoading && (
        <div
          className={
            'line-h flex h-full w-full items-center justify-center bg-secondary text-xs font-medium text-white'
          }
        >
          {getNameInitials(name)}
        </div>
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
