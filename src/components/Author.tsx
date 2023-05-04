import { User } from '@prisma/client';
import clsx from 'clsx';
import { Avatar } from './Avatar';

interface AuthorProps {
  className?: string;
  data: User;
}

export function Author({
  className,
  data: { name, avatarUrl },
}: AuthorProps): JSX.Element {
  const classes = {
    root: clsx(
      'flex items-center gap-1.5 text-xs leading-none lg:text-base',
      className
    ),
  };

  return (
    <div className={classes.root}>
      <Avatar className="shrink-0" size="sm" name={name} src={avatarUrl} />
      {name}
    </div>
  );
}
