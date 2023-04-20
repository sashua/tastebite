import {
  formatDuration as fnsFormatDuration,
  intervalToDuration,
} from 'date-fns';

export function formatDuration(minutes: number) {
  return fnsFormatDuration(
    intervalToDuration({
      start: 0,
      end: minutes * 60 * 1000,
    })
  );
}
