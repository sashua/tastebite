import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '~/assets/logo.svg';

interface Props {
  className?: string;
}

export function Logo({ className }: Props): JSX.Element {
  return (
    <Link
      className={clsx('block w-24', className)}
      href="/"
      aria-label="homepage"
    >
      <Image src={logoImage} alt="Tastebite" width={96} priority />
    </Link>
  );
}
