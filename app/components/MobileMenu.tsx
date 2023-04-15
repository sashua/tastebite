'use client';

import { Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { IconButton, NavLink } from '~/common/components';

interface Navigation {
  name: string;
  href: '/' | '/categories' | '/search' | '/about';
}

const navigations: Navigation[] = [
  { name: 'Homepage', href: '/' },
  { name: 'Categories', href: '/categories' },
  { name: 'Search', href: '/search' },
  { name: 'About', href: '/about' },
];

export function MobileMenu(): JSX.Element {
  return (
    <>
      <Popover as={Fragment}>
        {({ open, close }) => (
          <>
            <Popover.Button
              as={IconButton}
              icon={open ? RiCloseLine : RiMenuLine}
              aria-label="open mobile menu"
            />
            <Popover.Overlay className="fixed inset-x-0 bottom-0 top-14 bg-black/30" />
            <Popover.Panel
              as="ul"
              className="container fixed inset-x-0 top-14 flex flex-col gap-6 border-4 border-accent bg-white py-4 text-sm"
            >
              {navigations.map((item, i) => (
                <li key={i}>
                  <NavLink href={item.href} onClick={close}>
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
