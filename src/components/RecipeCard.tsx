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
        'rounded-xl shadow hover:shadow-md bg-secondary-100 sm:flex':
          variant === 'featured',
        'rounded': variant === 'simple',
      },
      className
    ),
    imageWrap: clsx('relative aspect-classic overflow-hidden', {
      'sm:grow': variant === 'featured',
    }),
    image: 'object-cover transition-transform group-hover:scale-[1.01]',
    bottomWrap: clsx('flex flex-col justify-center gap-4', {
      'p-6 border-t': variant === 'default',
      'px-6 py-8 sm:w-1/2 md:w-2/5 lg:gap-6 lg:w-1/2 lg:px-12':
        variant === 'featured',
      'px-2 pb-4 pt-2': variant === 'simple',
    }),
    topTags: 'flex gap-6',
    rating: '',
    title: clsx(
      'font-semibold underline decoration-transparent underline-offset-2 transition-colors group-hover:decoration-accent',
      {
        'text-xl': variant === 'default',
        'font-secondary text-3xl sm:text-4xl lg:text-5xl':
          variant === 'featured',
        'text-center text-sm leading-snug md:text-base xl:text-lg':
          variant === 'simple',
      }
    ),
    description: clsx('text-thin line-clamp-3', {
      'lg:text-lg': variant === 'featured',
    }),
    bottomTags: clsx('flex justify-end gap-6'),
  };
}
