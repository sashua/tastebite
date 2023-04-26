import { Recipe } from '@prisma/client';
import clsx from 'clsx';
import {
  RiDashboard2Fill,
  RiGroup2Fill,
  RiTimeFill,
  RiTimer2Fill,
} from 'react-icons/ri';
import { difficulties } from '~/constants';
import { formatDuration } from '~/helpers';

interface CookInfoProps {
  className?: string;
  data: Pick<Recipe, 'prepTime' | 'cookTime' | 'difficulty' | 'servings'>;
}

export function CookInfo({ className, data }: CookInfoProps): JSX.Element {
  const preparedData = prepareData(data);

  return (
    <ul className={clsx('grid grid-cols-2 gap-x-1 gap-y-2', className)}>
      {preparedData.map(({ caption, text, icon: Icon }) => (
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

function prepareData({
  prepTime,
  cookTime,
  difficulty,
  servings,
}: CookInfoProps['data']) {
  const data = [];
  if (prepTime) {
    data.push({
      caption: 'Prep time',
      text: formatDuration(prepTime),
      icon: RiTimer2Fill,
    });
  }
  if (cookTime) {
    data.push({
      caption: 'Cook time',
      text: formatDuration(cookTime),
      icon: RiTimeFill,
    });
  }
  if (difficulty !== null && difficulties[difficulty]) {
    data.push({
      caption: 'Difficulty',
      text: difficulties[difficulty],
      icon: RiDashboard2Fill,
    });
  }
  if (servings) {
    data.push({
      caption: 'Servings',
      text: `${servings} people`,
      icon: RiGroup2Fill,
    });
  }
  return data;
}
