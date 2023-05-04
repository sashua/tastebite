'use client';

import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { RiCloseLine, RiMenuLine } from 'react-icons/ri';
import { IconButton } from '~/components';
import { navLinks } from '~/constants';

export function MobileMenu(): JSX.Element {
  return (
    <>
      <Popover as={Fragment}>
        {({ open, close }) => (
          <>
            <Popover.Button
              as={IconButton}
              className="sm:hidden"
              icon={open ? RiCloseLine : RiMenuLine}
              aria-label={open ? 'Open menu' : 'Close menu'}
            />
            <Popover.Overlay className="fixed inset-x-0 bottom-0 top-14 bg-black/30 sm:hidden" />
            <Popover.Panel
              as="ul"
              className="container fixed inset-x-0 top-14 flex flex-col gap-6 bg-white pb-10 pt-6 text-sm shadow-sm sm:hidden"
            >
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    className="transition-colors hover:text-accent"
                    href={item.href}
                    onClick={close}
                  >
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
