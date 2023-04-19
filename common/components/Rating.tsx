import clsx from 'clsx';
import { RiStarFill, RiStarLine } from 'react-icons/ri';

interface Props {
  className?: string;
  value?: number;
}

export function Rating({ className, value = 0 }: Props): JSX.Element {
  return (
    <p className={clsx('flex gap-1 text-accent', className)}>
      <span className="sr-only">{`Rating ${value} out of 5`}</span>
      {[...Array(5)].map((_, i) => (
        <span key={i}>
          {Math.round(value) > i ? <RiStarFill /> : <RiStarLine />}
        </span>
      ))}
    </p>
  );
}
