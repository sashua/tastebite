import clsx from 'clsx';
import { getTagIcon } from '~/common/helpers';
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
    root: clsx('flex flex-wrap gap-4', className),
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
