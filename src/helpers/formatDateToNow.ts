import { formatDistanceToNowStrict } from 'date-fns';

export const formatDateToNow = (date: string | number | Date) =>
  formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  });
