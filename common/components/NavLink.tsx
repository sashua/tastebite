import Link, { LinkProps } from 'next/link';

interface Props extends LinkProps<string> {}

export function NavLink(props: Props): JSX.Element {
  return <Link {...props} className="transition-colors hover:text-accent" />;
}
