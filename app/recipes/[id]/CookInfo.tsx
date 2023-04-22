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

interface CookInfoProps {
  className?: string;
  data: Recipe['cookInfo'];
}

export function CookInfo({ className, data }: CookInfoProps): JSX.Element {
  const preparedData = prepareData(data);

  return (
    <ul className={clsx('grid grid-cols-2 gap-x-1 gap-y-2', className)}>
      {preparedData
        .filter(item => item.isVisible)
        .map(({ caption, text, icon: Icon }) => (
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
  return [
    {
      isVisible: prepTime > 0,
      caption: 'Prep time',
      text: formatDuration(prepTime),
      icon: RiTimer2Fill,
    },
    {
      isVisible: cookTime > 0,
      caption: 'Cook time',
      text: formatDuration(cookTime),
      icon: RiTimeFill,
    },
    {
      isVisible: difficulties[difficulty],
      caption: 'Difficulty',
      text: difficulties[difficulty],
      icon: RiDashboard2Fill,
    },
    {
      isVisible: servings > 0,
      caption: 'Servings',
      text: `${servings} people`,
      icon: RiGroup2Fill,
    },
  ];
}
