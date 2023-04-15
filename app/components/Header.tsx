import { RiSearchLine } from 'react-icons/ri';
import { IconLink, Logo } from '~/common/components';
import { MobileMenu } from './MobileMenu';

export function Header(): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 flex h-14 w-full items-center bg-white py-2">
      <nav className="container flex items-center justify-between gap-6">
        <IconLink href="/search" icon={RiSearchLine} aria-label="search" />
        <Logo />
        <MobileMenu />
      </nav>
    </header>
  );
}
