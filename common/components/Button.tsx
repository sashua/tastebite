import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  variant?: 'accent' | 'bordered';
}

export function Button({ className, variant, children }: Props): JSX.Element {
  const classes = getClasses(variant, className);

  return <button className={classes.root}>{children}</button>;
}

function getClasses(v: Props['variant'] = 'accent', className?: string) {
  return {
    root: clsx(
      'rounded px-6 py-3 text-lg shadow transition active:translate-y-px active:shadow-sm',
      {
        'border-accent bg-accent text-white hover:border-accent-400 hover:bg-accent-400':
          v === 'accent',
        'border-black bg-white text-black hover:bg-secondary-100':
          v === 'bordered',
      },
      className
    ),
  };
}
