import { RecipeIngredient } from '@prisma/client';
import clsx from 'clsx';
import { Checkbox } from '~/components';
import { formatIngredient } from '~/helpers';

interface IngredientsListProps {
  className?: string;
  data: RecipeIngredient[];
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
          <li className="py-1 lg:py-2" key={i}>
            <Checkbox
              className="items-stretch text-sm lg:text-base"
              checkClass="h-5 w-5 lg:h-6 lg:w-6"
            >
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
