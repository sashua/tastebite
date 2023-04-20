import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RiCalendarLine, RiTimerLine } from 'react-icons/ri';
import { routes } from '~/common/constants';
import { formatDateToNow, formatDuration } from '~/common/helpers';
import { Recipe } from '~/common/types';
import { Author } from './Author';
import { Rating } from './Rating';
import { Tag } from './Tag';

interface Props {
  recipe: Recipe;
}

export function RecipeCard({
  recipe: { id, name, author, imageFile, cookInfo, statistics, createdAt },
}: Props): JSX.Element {
  const totalTimeText = formatDuration(cookInfo.prepTime + cookInfo.cookTime);
  const createdAtText = formatDateToNow(createdAt);

  return (
    <Link
      className="group block overflow-hidden rounded-md border"
      href={`${routes.recipes}/${id}` as Route}
    >
      <div className="relative aspect-classic overflow-hidden">
        <Image
          className="object-cover transition-transform group-hover:scale-105"
          src={`/images/recipes/${imageFile}`}
          alt={name}
          fill
        />
      </div>
      <div className="p-6">
        <Rating value={statistics.averageRating} />
        <h3 className="mb-4 mt-2 text-xl font-semibold">{name}</h3>
        <Author name={author.name} avatarUrl="" />
        <div className="mt-12 flex justify-end gap-6 text-neutral-900">
          <Tag icon={RiCalendarLine}>{createdAtText}</Tag>
          <Tag icon={RiTimerLine}>{totalTimeText}</Tag>
        </div>
      </div>
    </Link>
  );
}
