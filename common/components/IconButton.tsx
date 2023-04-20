import clsx from 'clsx';
import { ComponentPropsWithoutRef, forwardRef } from 'react';
import { IconType } from 'react-icons';

interface Props extends ComponentPropsWithoutRef<'button'> {
  icon: IconType;
  iconClass?: string;
}

export const IconButton = forwardRef<HTMLButtonElement, Props>(
  function IconButton(
    { className, icon: Icon, iconClass, ...props },
    ref
  ): JSX.Element {
    const classes = {
      root: clsx(
        'rounded-full p-1 transition hover:text-accent active:scale-95',
        className
      ),
      icon: clsx('h-5 w-5', iconClass),
    };

    return (
      <button className={classes.root} {...props} ref={ref}>
        <Icon className={classes.icon} />
      </button>
    );
  }
);
