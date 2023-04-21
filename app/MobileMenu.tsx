'use client';

import { Popover } from '@headlessui/react';
import { Fragment } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { IconButton, Link } from '~/common/components';
import { routes } from '~/common/constants';

const links = [
  { name: 'Homepage', href: routes.homepage },
  { name: 'Collections', href: routes.collections },
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
            <Popover.Overlay className="fixed inset-x-0 bottom-0 top-14 bg-black/30" />
            <Popover.Panel
              as="ul"
              className="container fixed inset-x-0 top-14 flex flex-col gap-6 bg-white pb-10 pt-6 text-sm shadow"
            >
              {links.map((item, i) => (
                <li key={i}>
                  <Link href={item.href} onClick={close}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </Popover.Panel>
          </>
        )}
      </Popover>
    </>
  );
}
