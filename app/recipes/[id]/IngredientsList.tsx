import clsx from 'clsx';
import { Checkbox } from '~/common/components';
import { formatIngredient } from '~/common/helpers';
import { Recipe } from '~/common/types';

interface IngredientsListProps {
  className?: string;
  data: Recipe['ingredients'];
}

export function IngredientsList({
  className,
  data,
}: IngredientsListProps): JSX.Element {
  return (
    <ul className={clsx('divide-y', className)}>
      {data.map((item, i) => {
        const [measure, name, comment] = formatIngredient(item);
        return (
          <li className="py-1" key={i}>
            <Checkbox className="items-stretch text-sm" checkClass="h-5 w-5">
              <span className="font-semibold">{measure}</span>
              <span className="inline-block rounded-full bg-neutral-200 px-2 ui-checked:bg-accent-100">
                {name}
              </span>
              <span>{comment}</span>
            </Checkbox>
          </li>
        );
      })}
    </ul>
  );
}
