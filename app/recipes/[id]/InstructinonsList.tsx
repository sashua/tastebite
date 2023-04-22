import clsx from 'clsx';
import { Recipe } from '~/common/types';

interface InstructionsListProps {
  className?: string;
  data: Recipe['instructions'];
}

export function InstructionsList({
  className,
  data,
}: InstructionsListProps): JSX.Element {
  return (
    <ul className={clsx('list-inside space-y-6 text-sm', className)}>
      {data.map((item, i) => (
        <li className="flex gap-2" key={i}>
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-semibold leading-none text-white">
            {i + 1}
          </span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
