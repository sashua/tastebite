import { IconType } from 'react-icons';
import { defaultTagIcon, defaultTagIcons } from '~/constants';

export const getTagIcon = (tag: string): IconType => {
  const key = tag.toLowerCase();
  return defaultTagIcons[key] ?? defaultTagIcon;
};
