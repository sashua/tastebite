import clsx from 'clsx';
import {
  RiDashboard2Fill,
  RiGroup2Fill,
  RiTimeFill,
  RiTimer2Fill,
} from 'react-icons/ri';
import { difficulties } from '~/common/constants';
import { formatDuration } from '~/common/helpers';
import { Recipe } from '~/common/types';

interface Props {
  className?: string;
  info: Recipe['cookInfo'];
}

export function CookInfo({
  className,
  info: { prepTime, cookTime, difficulty, servings },
}: Props): JSX.Element {
  const items = [
    {
      caption: 'Prep time',
      text: formatDuration(prepTime),
      icon: RiTimer2Fill,
    },
    {
      caption: 'Cook time',
      text: formatDuration(cookTime),
      icon: RiTimeFill,
    },
    {
      caption: 'Difficulty',
      text: difficulties[difficulty],
      icon: RiDashboard2Fill,
    },
    {
      caption: 'Servings',
      text: `${servings} people`,
      icon: RiGroup2Fill,
    },
  ];

  return (
    <ul className={clsx('grid grid-cols-2 gap-x-1 gap-y-2', className)}>
      {items.map(({ caption, text, icon: Icon }) => (
        <li key={caption} className="flex items-center">
          <Icon className="mr-1.5 h-7 w-7 text-accent" />
          <div className="flex flex-col">
            <span className="text-xs font-light uppercase leading-tight text-neutral-700">
              {caption}
            </span>
            <span className="text-sm font-semibold uppercase leading-snug">
              {text}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}
