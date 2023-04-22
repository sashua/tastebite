import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  icon?: IconType;
}

export function Input({
  className,
  icon: Icon,
  ...props
}: InputProps): JSX.Element {
  const classes = {
    root: clsx('relative block rounded shadow-sm', className),
    input: clsx(
      'peer w-full rounded px-10 py-3 placeholder:font-thin placeholder:text-neutral-400'
    ),
    icon: clsx(
      'absolute left-2.5 top-1/2 h-6 w-6 -translate-y-1/2 text-neutral-400'
    ),
  };

  return (
    <label className={classes.root}>
      <input className={classes.input} {...props} />
      {Icon && <Icon className={classes.icon} />}
    </label>
  );
}
