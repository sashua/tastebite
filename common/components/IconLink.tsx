import Link, { LinkProps } from 'next/link';
import { IconType } from 'react-icons';

interface Props extends LinkProps<string> {
  icon: IconType;
}

export function IconLink({ icon: Icon, ...props }: Props): JSX.Element {
  return (
    <Link
      {...props}
      className="rounded-full p-1 transition-colors hover:text-accent"
    >
      <Icon className="h-5 w-5" />
    </Link>
  );
}
