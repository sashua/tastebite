import clsx from 'clsx';
import { getTagIcon } from '~/helpers';
import { Tag } from './Tag';

interface TagsListProps {
  className?: string;
  tags: string[];
  iconClass?: string;
}

export function TagsList({
  className,
  tags,
  iconClass,
}: TagsListProps): JSX.Element {
  const classes = {
    root: clsx('flex flex-wrap gap-4 sm:gap-6 lg:gap-8', className),
  };

  return (
    <ul className={classes.root}>
      {tags.map((text, i) => (
        <li key={i}>
          <Tag icon={getTagIcon(text)} iconClass={iconClass}>
            {text}
          </Tag>
        </li>
      ))}
    </ul>
  );
}
