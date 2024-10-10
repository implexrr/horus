import mod from '../lazyMath';

const daysInMonth = {
  0: 31,
  1: 28,
  2: 31,
  3: 30,
  4: 31,
  5: 30,
  6: 31,
  7: 31,
  8: 30,
  9: 31,
  10: 30,
  11: 31,
};

// Create a current datetime object for a specified timezone, with units from seconds to years
export default function convertUTCDateTime(UTCdatetime, tzoffset) {
  // Create initial datetime obj, setting all units to UTC standard time
  const datetime = {
    second: UTCdatetime.getUTCSeconds(),
    hour: UTCdatetime.getUTCHours(),
    minute: UTCdatetime.getUTCMinutes(),
    day: UTCdatetime.getUTCDate(),
    month: UTCdatetime.getUTCMonth(),
    year: UTCdatetime.getUTCFullYear(),
    weekday: UTCdatetime.getUTCDay(),
  };

  // Convert UTC minutes to timezone specific minutes
  datetime.minute += ((tzoffset % 1) * 60);

  // Convert UTC minutes/hours to timezone specific minutes/hours
  datetime.hour += Math.trunc(tzoffset);
  if (datetime.minute >= 60) { datetime.hour += 1; }
  if (datetime.minute < 0) { datetime.hour -= 1; }
  datetime.minute = mod(datetime.minute, 60);

  // Convert UTC hours/days/weekdays to timezone specific hours/days/weekdays
  if ((datetime.hour) >= 24) { datetime.day += 1; datetime.weekday += 1; }
  if ((datetime.hour) < 0) { datetime.day -= 1; datetime.weekday -= 1; }
  datetime.hour = mod(datetime.hour, 24);
  datetime.weekday = mod(datetime.weekday, 7);

  // Convert UTC days/months to timezone specific days/months
  if (datetime.day < 1) {
    datetime.day = daysInMonth[mod((datetime.month - 1), 12)];
    datetime.month -= 1;
  } else if (datetime.day > daysInMonth[datetime.month]) {
    datetime.day = 1;
    datetime.month += 1;
  }

  // Convert UTC months/years to timezone specific months/years
  if (datetime.month < 0) { datetime.year -= 1; }
  if (datetime.month > 11) { datetime.year += 1; }
  datetime.month = mod(datetime.month, 12);

  return datetime;
}
