import { IconType } from 'react-icons';
import { defaultTagIcon, tagIcons } from '~/common/constants';

export function getTagIcon(tag: string): IconType {
  const key = tag.toLowerCase();
  return tagIcons[key] ?? defaultTagIcon;
}
