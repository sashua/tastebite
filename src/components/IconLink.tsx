import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { IconType } from 'react-icons';

interface IconLinkProps extends LinkProps<string> {
  icon: IconType;
  iconClass?: string;
}

export function IconLink({
  className,
  icon: Icon,
  iconClass,
  ...props
}: IconLinkProps): JSX.Element {
  const classes = {
    root: clsx(
      'inline-block rounded-full p-1 transition-colors hover:text-accent',
      className
    ),
    icon: clsx('h-5 w-5', iconClass),
  };

  return (
    <Link className={classes.root} {...props}>
      <Icon className={classes.icon} />
    </Link>
  );
}
