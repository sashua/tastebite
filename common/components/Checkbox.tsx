'use client';

import { Switch, SwitchProps } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from 'react-icons/ri';

interface CheckboxProps extends SwitchProps<'button'> {
  checkClass?: string;
  children?: ReactNode;
}

export function Checkbox({
  className,
  checkClass,
  children,
  ...props
}: CheckboxProps): JSX.Element {
  const classes = {
    root: clsx('flex items-center text-left', className),
    checkbox: clsx('mr-1.5 ui-checked:text-accent shrink-0', checkClass),
  };

  return (
    <Switch className={classes.root} {...props}>
      {({ checked }) => (
        <>
          {checked ? (
            <RiCheckboxCircleFill className={classes.checkbox} />
          ) : (
            <RiCheckboxBlankCircleLine className={classes.checkbox} />
          )}
          <span>{children}</span>
        </>
      )}
    </Switch>
  );
}
