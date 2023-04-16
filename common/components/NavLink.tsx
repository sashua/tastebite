import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps<string> {}

export function NavLink({ className, ...props }: Props): JSX.Element {
  return (
    <Link
      {...props}
      className={clsx('transition-colors hover:text-accent', className)}
    />
  );
}
