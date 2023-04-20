import clsx from 'clsx';
import { IconType } from 'react-icons';
import { defaultTagIcon, defaultTagIcons } from '../constants';
import { Tag } from './Tag';

interface Props {
  className?: string;
  tags: string[];
  tagIcons?: Record<string, IconType>;
  iconClass?: string;
}

export function TagsList({
  className,
  tags,
  tagIcons = defaultTagIcons,
  iconClass,
}: Props): JSX.Element {
  return (
    <ul className={clsx('flex flex-wrap gap-2', className)}>
      {tags.map((text, i) => (
        <li key={i}>
          <Tag
            icon={tagIcons?.[text.toLowerCase()] ?? defaultTagIcon}
            iconClass={iconClass}
          >
            {text}
          </Tag>
        </li>
      ))}
    </ul>
  );
}
