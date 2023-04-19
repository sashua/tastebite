import clsx from 'clsx';
import { Avatar } from './Avatar';

interface Props {
  className?: string;
  name: string;
  avatarUrl?: string;
}

export function Author({ className, name, avatarUrl }: Props): JSX.Element {
  return (
    <div className={clsx('flex items-center gap-1.5', className)}>
      <Avatar name={name} src={avatarUrl} />
      <span className="text-xs">{name}</span>
    </div>
  );
}