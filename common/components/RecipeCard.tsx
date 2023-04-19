import {
  formatDistanceToNowStrict,
  formatDuration,
  intervalToDuration,
} from 'date-fns';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RiCalendarLine, RiTimerLine } from 'react-icons/ri';
import { routes } from '~/common/constants';
import { Recipe } from '~/common/types';
import { Author } from './Author';
import { Chip } from './Chip';
import { Rating } from './Rating';

interface Props {
  recipe: Recipe;
}

export function RecipeCard({
  recipe: { id, name, author, imageFile, cookInfo, statistics, createdAt },
}: Props): JSX.Element {
  const totalTimeText = formatDuration(
    intervalToDuration({
      start: 0,
      end: (cookInfo.prepTime + cookInfo.cookTime) * 60 * 1000,
    })
  );
  const createdAtText = formatDistanceToNowStrict(new Date(createdAt), {
    addSuffix: true,
  });

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
        <div className="mt-12 flex justify-end gap-6 text-neutral-dark">
          <Chip icon={RiCalendarLine} text={createdAtText} />
          <Chip icon={RiTimerLine} text={totalTimeText} />
        </div>
      </div>
    </Link>
  );
}
