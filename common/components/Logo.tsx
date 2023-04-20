import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '~/assets/logo.svg';

interface Props {
  className?: string;
}

export function Logo({ className }: Props): JSX.Element {
  const classes = {
    root: clsx('block w-24', className),
  };
  return (
    <Link className={classes.root} href="/" aria-label="homepage">
      <Image src={logoImage} alt="Tastebite" width={96} priority />
    </Link>
  );
}
