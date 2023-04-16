import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons';

interface Props extends ComponentPropsWithoutRef<'button'> {
  icon: IconType;
}

export function IconButton({
  className,
  icon: Icon,
  ...props
}: Props): JSX.Element {
  return (
    <button
      {...props}
      className={clsx(
        'rounded-full p-1 transition hover:text-accent active:scale-95',
        className
      )}
    >
      <Icon className="h-5 w-5" />
    </button>
  );
}
