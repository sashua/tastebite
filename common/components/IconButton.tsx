import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { IconType } from 'react-icons';

interface Props extends ComponentPropsWithoutRef<'button'> {
  icon: IconType;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  function IconButton({ className, icon: Icon, ...props }, ref): JSX.Element {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(
          'rounded-full p-1 transition hover:text-accent active:scale-95',
          className
        )}
      >
        <Icon className="h-5 w-5" />
      </button>
    );
  }
);
