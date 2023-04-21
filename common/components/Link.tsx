import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';

interface Props extends LinkProps<string> {}

export function Link({ className, ...props }: Props): JSX.Element {
  const classes = {
    root: clsx('transition-colors hover:text-accent', className),
  };

  return <NextLink className={classes.root} {...props} />;
}
