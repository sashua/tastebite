import { RiSearch2Line } from 'react-icons/ri';
import { IconLink, Logo } from '~/components';
import { routes } from '~/constants';
import { MobileMenu } from './MobileMenu';

export function Header(): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white">
      <div className="container">
        <nav className="flex h-14 items-center justify-between gap-6 py-2">
          <IconLink
            href={routes.search}
            icon={RiSearch2Line}
            aria-label="Search recipes"
          />
          <Logo />
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}