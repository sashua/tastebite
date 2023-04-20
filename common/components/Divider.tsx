import clsx from 'clsx';

interface Props {
  className?: string;
}

export function Divider({ className }: Props): JSX.Element {
  return <div className={clsx('border-b', className)}></div>;
}
