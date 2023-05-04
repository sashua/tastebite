import { Category } from '@prisma/client';
import clsx from 'clsx';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '~/constants';

interface CategoryCardProps {
  className?: string;
  data: Category;
}

export function CategoryCard({
  className,
  data,
}: CategoryCardProps): JSX.Element {
  const { id, name, imageUrl } = data;

  const href = `${routes.categories}/${id}` as Route;
  const src = `/images/categories/${imageUrl}`;

  return (
    <Link className={clsx('group block', className)} href={href}>
      <div className="relative aspect-square overflow-hidden rounded-full shadow transition-shadow hover:shadow-md">
        <Image
          className="object-cover transition-transform group-hover:scale-[1.01] "
          src={src}
          alt={name}
          fill
        />
      </div>
      <div className="p-2 sm:p-3 md:p-2 lg:p-3">
        <h3 className="text-center text-sm font-semibold leading-snug underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-accent sm:text-lg md:text-sm lg:text-lg xl:text-xl">
          {name}
        </h3>
      </div>
    </Link>
  );
}
