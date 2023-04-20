import clsx from 'clsx';
import { Avatar } from './Avatar';

interface Props {
  className?: string;
  name: string;
  avatarUrl?: string;
}

export function Author({ className, name, avatarUrl }: Props): JSX.Element {
  const classes = {
    root: clsx('flex items-center gap-1.5 text-xs leading-none', className),
  };

  return (
    <div className={classes.root}>
      <Avatar className="shrink-0" name={name} src={avatarUrl} />
      {name}
    </div>
  );
}
