import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

type ButtonVariant = 'solid' | 'bordered' | 'flat';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  className,
  variant = 'solid',
  size = 'md',
  type = 'button',
  ...props
}: ButtonProps): JSX.Element {
  const classes = getClasses({ className, variant, size });

  return <button className={classes.root} type={type} {...props} />;
}

function getClasses({
  className,
  variant,
  size,
}: Pick<ButtonProps, 'className' | 'variant' | 'size'>) {
  return {
    root: clsx(
      'leading-tight transition',
      {
        'border-accent bg-accent text-white shadow active:shadow-sm active:translate-y-px hover:border-accent-400 hover:bg-accent-400':
          variant === 'solid',
        'border-black bg-white text-black shadow active:shadow-sm active:translate-y-px hover:bg-secondary-100':
          variant === 'bordered',
        'text-black hover:text-accent': variant === 'flat',
      },
      {
        'text-sm md:text-base': size === 'xs',
        'rounded-sm py-1.5 px-4 text-sm md:py-2 md:px-8 md:text-base':
          size === 'sm',
        'rounded py-2.5 px-6 text-base md:py-3 md:px-12 md:text-lg':
          size === 'md',
        'rounded-md py-3 px-8 text-lg md:py-4 md:px-16 md:text-xl':
          size === 'lg',
      },
      className
    ),
  };
}
