import clsx from 'clsx';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface TagProps {
  className?: string;
  icon: IconType;
  iconClass?: string;
  children?: ReactNode;
}

export function Tag({
  className,
  icon: Icon,
  iconClass,
  children,
}: TagProps): JSX.Element {
  const classes = {
    root: clsx('flex items-center text-sm', className),
    icon: clsx('mr-1.5 h-5 w-5', iconClass),
  };

  return (
    <div className={classes.root}>
      <Icon className={classes.icon} />
      {children}
    </div>
  );
}
