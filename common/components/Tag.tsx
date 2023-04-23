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
  return (
    <div className={clsx('flex items-center gap-1 text-sm', className)}>
      <Icon className={clsx('h-5 w-5', iconClass)} />
      {children}
    </div>
  );
}
