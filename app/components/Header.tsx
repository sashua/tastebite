import { RiSearchLine } from 'react-icons/ri';
import { IconLink, Logo } from '~/common/components';
import { routes } from '~/common/constants';
import { MobileMenu } from './MobileMenu';

export function Header(): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-30 flex h-16 w-full items-center bg-white py-2 shadow">
      <nav className="container flex items-center justify-between gap-6">
        <IconLink
          href={routes.search}
          icon={RiSearchLine}
          aria-label="search"
        />
        <Logo />
        <MobileMenu />
      </nav>
    </header>
  );
}
