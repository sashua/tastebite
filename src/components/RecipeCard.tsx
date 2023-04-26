import { Recipe } from '@prisma/client';
import clsx from 'clsx';
import { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { RiAlarmLine, RiFundsLine } from 'react-icons/ri';
import { routes } from '~/constants';
import { formatDuration } from '~/helpers';
import { Rating } from './Rating';
import { Tag } from './Tag';
type RecipeCardVariant = 'default' | 'featured' | 'simple';

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
  const {
    id,
    name,
    imageUrl,
    description,
    prepTime,
    cookTime,
    averageRating,
    averageRepeat,
  } = data;
  const classes = getClasses({ variant, className });
  const isVisible = getIsVisible(variant);

  const href = `${routes.recipes}/${id}` as Route;
  const src = `/images/recipes/${imageUrl}`;
  const timeText = prepTime && cookTime && formatDuration(prepTime + cookTime);
  const repeatText = `${Math.round(
    averageRepeat * 100
  )}% Would make this again`;

  return (
    <Link className={classes.root} href={href}>
      <div className={classes.imageWrap}>
        <Image className={classes.image} src={src} alt={name} fill />
      </div>
      <div className={classes.bottomWrap}>
        {isVisible.topTags && (
          <div className={classes.topTags}>
            <Tag icon={RiFundsLine}>{repeatText}</Tag>
          </div>
        )}
        {isVisible.rating && (
          <Rating className={classes.rating} value={averageRating} />
        )}
        <h3 className={classes.title}>{name}</h3>
        {isVisible.description && (
          <p className={classes.description}>{description}</p>
        )}
        {isVisible.bottomTags && (
          <div className={classes.bottomTags}>
            <Tag size="sm" icon={RiAlarmLine}>
              {timeText}
            </Tag>
          </div>
        )}
      </div>
    </Link>
  );
}

function getIsVisible(variant: RecipeCardVariant) {
  return {
    topTags: variant === 'featured',
    rating: variant === 'default',
    description: variant === 'featured',
    bottomTags: variant === 'default' || variant === 'featured',
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
        'rounded-xl shadow hover:shadow-md bg-secondary-100':
          variant === 'featured',
        'rounded shadow-sm hover:shadow': variant === 'simple',
      },
      className
    ),
    imageWrap: 'relative aspect-classic overflow-hidden',
    image: 'object-cover transition-transform group-hover:scale-[1.01]',
    bottomWrap: clsx('border-t', {
      'p-6': variant === 'default',
      'px-6 py-8': variant === 'featured',
      'px-2 pb-3 pt-2': variant === 'simple',
    }),
    topTags: 'flex gap-6 mb-4',
    rating: 'mb-4',
    title: clsx(
      'font-semibold underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-accent',
      {
        'text-xl': variant === 'default',
        'font-secondary text-3xl': variant === 'featured',
        'text-center text-sm leading-snug': variant === 'simple',
      }
    ),
    description: 'mt-4 text-thin line-clamp-3',
    bottomTags: clsx('flex justify-end gap-6', {
      'mt-4': variant === 'default',
      'mt-6': variant === 'featured',
    }),
  };
}