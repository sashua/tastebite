import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Collection } from '~/common/types';
import { routes } from '../constants';

interface Props {
  collection: Collection;
}

export function CollectionCard({ collection }: Props): JSX.Element {
  const { id, name, imageFile } = collection;

  const href = `${routes.collections}/${id}` as Route;
  const src = `/images/collections/${imageFile}`;

  return (
    <Link className="group" href={href}>
      <div className="relative aspect-square overflow-hidden rounded-full shadow transition-shadow hover:shadow-md">
        <Image
          className="object-cover transition-transform group-hover:scale-[1.01] "
          src={src}
          alt={name}
          fill
        />
      </div>
      <div className="p-2">
        <h3 className="text-center text-sm font-semibold leading-snug underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-accent">
          {name}
        </h3>
      </div>
    </Link>
  );
}
