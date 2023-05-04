import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '~/assets/logo.svg';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps): JSX.Element {
  const classes = {
    root: clsx('block w-24 sm:w-28 lg:w-32', className),
  };

  return (
    <Link className={classes.root} href="/" aria-label="homepage">
      <Image src={logoImage} width={128} alt="Tastebite" priority />
    </Link>
  );
}
