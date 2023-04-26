import {
  formatDuration as fnsFormatDuration,
  intervalToDuration,
} from 'date-fns';

export const formatDuration = (minutes: number) =>
  fnsFormatDuration(
    intervalToDuration({
      start: 0,
      end: minutes * 60 * 1000,
    })
  );
