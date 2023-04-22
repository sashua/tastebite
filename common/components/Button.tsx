import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'accent' | 'bordered';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
}

export function Button({
  className,
  variant = 'accent',
  ...props
}: ButtonProps): JSX.Element {
  const classes = getClasses({ className, variant });

  return <button className={classes.root} {...props} />;
}

function getClasses({
  className,
  variant,
}: Pick<ButtonProps, 'className' | 'variant'>) {
  return {
    root: clsx(
      'rounded px-6 py-3 text-lg leading-tight shadow transition active:translate-y-px active:shadow-sm',
      {
        'border-accent bg-accent text-white hover:border-accent-400 hover:bg-accent-400':
          variant === 'accent',
        'border-black bg-white text-black hover:bg-secondary-100':
          variant === 'bordered',
      },
      className
    ),
  };
}
