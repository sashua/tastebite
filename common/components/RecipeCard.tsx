import clsx from 'clsx';
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
  className?: string;
  recipe: Recipe;
  variant?: 'default' | 'simple';
}

export function RecipeCard({ className, recipe, variant }: Props): JSX.Element {
  const { id, name, author, imageFile, cookInfo, statistics, createdAt } =
    recipe;
  const classes = getClasses(variant, className);
  const isVisible = getIsVisible(variant);

  const href = `${routes.recipes}/${id}` as Route;
  const src = `/images/recipes/${imageFile}`;
  const timeText = formatDuration(cookInfo.prepTime + cookInfo.cookTime);
  const createdText = formatDateToNow(createdAt);

  return (
    <Link className={classes.root} href={href}>
      <div className={classes.imageWrap}>
        <Image className={classes.image} src={src} alt={name} fill />
      </div>
      <div className={classes.bottomWrap}>
        {isVisible.rating && <Rating value={statistics.averageRating} />}
        <h3 className={classes.title}>{name}</h3>
        {isVisible.author && <Author name={author.name} avatarUrl="" />}
        {isVisible.tags && (
          <div className={classes.tagsWrap}>
            <Tag icon={RiCalendarLine}>{createdText}</Tag>
            <Tag icon={RiTimerLine}>{timeText}</Tag>
          </div>
        )}
      </div>
    </Link>
  );
}

function getIsVisible(v: Props['variant'] = 'default') {
  return {
    rating: v === 'default',
    author: v === 'default',
    tags: v === 'default',
  };
}

function getClasses(
  v: Props['variant'] = 'default',
  className: Props['className']
) {
  return {
    root: clsx(
      'group block overflow-hidden transition-shadow',
      {
        'rounded-xl shadow hover:shadow-md': v === 'default',
        'rounded shadow-sm hover:shadow': v === 'simple',
      },
      className
    ),
    imageWrap: 'relative aspect-classic overflow-hidden',
    image: 'object-cover transition-transform group-hover:scale-[1.01]',
    bottomWrap: clsx('border-t', {
      'p-6': v === 'default',
      'px-2 pb-3 pt-2': v === 'simple',
    }),
    title: clsx(
      'font-semibold underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-accent',
      {
        'mb-4 mt-2 text-xl': v === 'default',
        'text-center text-sm leading-snug': v === 'simple',
      }
    ),
    tagsWrap: 'mt-8 flex justify-end gap-6 text-neutral-900',
  };
}
