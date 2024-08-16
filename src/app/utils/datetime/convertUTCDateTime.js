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

// could've just used tzoffset as a str to put into GMT+0:00 instead of all this lol
export default function convertUTCDateTime(UTCdatetime, tzoffset) {
  // pull time units from second to year
  const datetime = {
    second: UTCdatetime.getUTCSeconds(),
    hour: UTCdatetime.getUTCHours(),
    minute: UTCdatetime.getUTCMinutes(),
    day: UTCdatetime.getUTCDate(),
    month: UTCdatetime.getUTCMonth(),
    year: UTCdatetime.getUTCFullYear(),
    weekday: UTCdatetime.getUTCDay(),
  };

  // convert minute
  datetime.minute += ((tzoffset % 1) * 60);

  // convert minute/hour
  datetime.hour += Math.trunc(tzoffset);
  if (datetime.minute >= 60) { datetime.hour += 1; }
  if (datetime.minute < 0) { datetime.hour -= 1; }
  datetime.minute = mod(datetime.minute, 60);

  // convert hour/day/weekday
  if ((datetime.hour) >= 24) { datetime.day += 1; datetime.weekday += 1; }
  if ((datetime.hour) < 0) { datetime.day -= 1; datetime.weekday -= 1; }
  datetime.hour = mod(datetime.hour, 24);
  datetime.weekday = mod(datetime.weekday, 7);

  // convert day/month
  if (datetime.day < 1) {
    datetime.day = daysInMonth[mod((datetime.month - 1), 12)];
    datetime.month -= 1;
  } else if (datetime.day > daysInMonth[datetime.month]) {
    datetime.day = 1;
    datetime.month += 1;
  }

  // convert month/year
  if (datetime.month < 0) { datetime.year -= 1; }
  if (datetime.month > 11) { datetime.year += 1; }
  datetime.month = mod(datetime.month, 12);

  return datetime;
}
