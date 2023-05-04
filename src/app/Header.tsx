import Link from 'next/link';
import { RiSearch2Line } from 'react-icons/ri';
import { IconLink, Logo } from '~/components';
import { navLinks, routes } from '~/constants';
import { MobileMenu } from './MobileMenu';

export function Header(): JSX.Element {
  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-white sm:static">
      <div className="container">
        <nav className="flex h-14 items-center justify-between gap-6 py-2 sm:h-auto sm:py-6">
          <MobileMenu />
          <Logo className="flex-shrink-0" />
          <ul className="hidden sm:flex sm:gap-4 sm:text-sm md:gap-6 md:text-base">
            {navLinks.map((item, i) => (
              <li key={i}>
                <Link
                  className="p-2 transition-colors hover:text-accent"
                  href={item.href}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <IconLink
            href={routes.search}
            icon={RiSearch2Line}
            aria-label="Search recipes"
          />
        </nav>
      </div>
    </header>
  );
}
