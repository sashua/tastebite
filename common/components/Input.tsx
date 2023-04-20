import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';
import { IconType } from 'react-icons';

interface Props extends ComponentPropsWithoutRef<'input'> {
  icon?: IconType;
}

export function Input({ className, icon: Icon, ...props }: Props): JSX.Element {
  const classes = {
    root: clsx('relative block rounded', className),
    input: clsx(
      'peer w-full px-10 py-3 rounded placeholder:text-neutral-400 placeholder:font-thin'
    ),
    icon: clsx(
      'absolute left-2.5 top-1/2 -translate-y-1/2 text-neutral-400 w-6 h-6'
    ),
  };
  return (
    <label className={classes.root}>
      <input className={classes.input} {...props} />
      {Icon && <Icon className={classes.icon} />}
    </label>
  );
}
