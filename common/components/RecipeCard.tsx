import clsx from 'clsx';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RiAlarmLine, RiCalendarLine } from 'react-icons/ri';
import { routes } from '~/common/constants';
import { formatDateToNow, formatDuration } from '~/common/helpers';
import { Recipe } from '~/common/types';
import { Author } from './Author';
import { Rating } from './Rating';
import { Tag } from './Tag';

type RecipeCardVariant = 'default' | 'simple';

interface RecipeCardProps {
  className?: string;
  data: Recipe;
  variant?: RecipeCardVariant;
}

export function RecipeCard({
  className,
  data,
  variant = 'default',
}: RecipeCardProps): JSX.Element {
  const { id, name, author, imageFile, cookInfo, statistics, createdAt } = data;
  const classes = getClasses({ variant, className });
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
            <Tag icon={RiAlarmLine}>{timeText}</Tag>
          </div>
        )}
      </div>
    </Link>
  );
}

function getIsVisible(variant: RecipeCardVariant) {
  return {
    rating: variant === 'default',
    author: variant === 'default',
    tags: variant === 'default',
  };
}

function getClasses({
  className,
  variant,
}: Pick<RecipeCardProps, 'className' | 'variant'>) {
  return {
    root: clsx(
      'group block overflow-hidden transition-shadow',
      {
        'rounded-xl shadow hover:shadow-md': variant === 'default',
        'rounded shadow-sm hover:shadow': variant === 'simple',
      },
      className
    ),
    imageWrap: 'relative aspect-classic overflow-hidden',
    image: 'object-cover transition-transform group-hover:scale-[1.01]',
    bottomWrap: clsx('border-t', {
      'p-6': variant === 'default',
      'px-2 pb-3 pt-2': variant === 'simple',
    }),
    title: clsx(
      'font-semibold underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-accent',
      {
        'mb-4 mt-2 text-xl': variant === 'default',
        'text-center text-sm leading-snug': variant === 'simple',
      }
    ),
    tagsWrap: 'mt-8 flex justify-end gap-6 text-neutral-900',
  };
}
