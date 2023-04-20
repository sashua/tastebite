import { RiSearchLine } from 'react-icons/ri';
import { IconLink, Logo } from '~/common/components';
import { routes } from '~/common/constants';
import { MobileMenu } from './MobileMenu';

export function Header(): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white">
      <div className="container">
        <nav className="flex h-14 items-center justify-between gap-6 border-b py-2">
          <IconLink
            href={routes.search}
            icon={RiSearchLine}
            aria-label="search"
          />
          <Logo />
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}
