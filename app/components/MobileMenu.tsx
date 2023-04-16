'use client';

import { Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { IconButton, NavLink } from '~/common/components';
import { routes } from '~/common/constants';

const links = [
  { name: 'Homepage', href: routes.homepage },
  { name: 'Categories', href: routes.categories },
  { name: 'Search', href: routes.search },
  { name: 'About', href: routes.about },
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
            <Popover.Overlay className="fixed inset-x-0 bottom-0 top-16 bg-black/30" />
            <Popover.Panel
              as="ul"
              className="container fixed inset-x-0 top-16 flex flex-col gap-6 bg-white py-4 text-sm shadow-modal"
            >
              {links.map((item, i) => (
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
