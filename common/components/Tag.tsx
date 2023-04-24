import clsx from 'clsx';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';

type TagSize = 'sm' | 'md';

interface TagProps {
  className?: string;
  size?: TagSize;
  icon: IconType;
  iconClass?: string;
  children?: ReactNode;
}

export function Tag({
  className,
  size = 'md',
  icon: Icon,
  iconClass,
  children,
}: TagProps): JSX.Element {
  const classes = getClasses({ className, size, iconClass });
  return (
    <div className={classes.root}>
      <Icon className={classes.icon} />
      {children}
    </div>
  );
}

function getClasses({
  className,
  size,
  iconClass,
}: Pick<TagProps, 'className' | 'size' | 'iconClass'>) {
  return {
    root: clsx(
      'flex items-center',
      {
        'gap-1 text-xs': size === 'sm',
        'gap-1.5 text-sm': size === 'md',
      },
      className
    ),
    icon: clsx(
      { 'h-5 w-5': size === 'sm', 'h-6 w-6': size === 'md' },
      iconClass
    ),
  };
}
