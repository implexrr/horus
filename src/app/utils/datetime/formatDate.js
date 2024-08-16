/* eslint-disable object-curly-newline */
import convertUTCDateTime from './convertUTCDateTime';

const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const weekdays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

function getCurDate(tzoffset) {
  const UTCdatetime = new Date();
  const convertedDateTime = convertUTCDateTime(UTCdatetime, tzoffset);
  const { year, month, day, weekday } = convertedDateTime;
  return { year, month, day, weekday };
}

function formatDate(dateObj) {
  // eslint-disable-next-line prefer-const
  let { year, month, day, weekday } = dateObj;
  month = months[month];
  weekday = weekdays[weekday];
  return { year, month, day, weekday };
}

export default function getFormattedCurDate(tzoffset) {
  const unformattedCurDate = getCurDate(tzoffset);
  const formattedCurDate = formatDate(unformattedCurDate);
  return formattedCurDate;
}
