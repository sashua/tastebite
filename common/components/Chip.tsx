import clsx from 'clsx';
import { IconType } from 'react-icons';

interface Props {
  className?: string;
  icon?: IconType;
  text?: string;
}

export function Chip({ className, icon: Icon, text }: Props): JSX.Element {
  return (
    <div className={clsx('flex items-center gap-1.5 text-xs', className)}>
      {Icon && <Icon className="h-4 w-4" />}
      {text && <span>{text}</span>}
    </div>
  );
}
