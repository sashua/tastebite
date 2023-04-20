import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps<string> {}

export function NavLink({ className, ...props }: Props): JSX.Element {
  const classes = {
    root: clsx('transition-colors hover:text-accent', className),
  };

  return <Link className={classes.root} {...props} />;
}
