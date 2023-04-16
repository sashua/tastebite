import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { routes } from '~/common/constants';
import { Recipe } from '~/common/types';
import { Rating } from './Rating';

interface Props {
  recipe: Recipe;
}

export function RecipeCard({
  recipe: { id, title, rating, image },
}: Props): JSX.Element {
  return (
    <Link
      className="group block overflow-hidden rounded-md border"
      href={`${routes.recipes}/${id}` as Route}
    >
      <div className="relative aspect-classic overflow-hidden">
        <Image
          className="object-cover transition-transform group-hover:scale-105"
          src={image}
          alt={title}
          fill
        />
      </div>
      <div className="p-6">
        <Rating value={rating} />
        <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      </div>
    </Link>
  );
}
