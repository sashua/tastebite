import Image from 'next/image';
import Link from 'next/link';
import logoImage from '~/assets/logo.svg';

export function Logo(): JSX.Element {
  return (
    <Link className="block w-24 md:w-40" href="/" aria-label="homepage">
      <Image src={logoImage} alt="Tastebite" priority />
    </Link>
  );
}
