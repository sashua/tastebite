import { formatDistanceToNowStrict } from 'date-fns';

export function formatDateToNow(date: string | number | Date) {
  return formatDistanceToNowStrict(new Date(date), {
    addSuffix: true,
  });
}
