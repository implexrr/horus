/* eslint-disable object-curly-newline */
import convertUTCDateTime from './convertUTCDateTime';

const FORMAT_OFFSET = 1; // Since external API counts January as month 1 instead of month 0

// Define months object for later formatting
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

// Define weekdays object for later formatting
const weekdays = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

// Get current (unformatted) date object according to given timezone
function getCurDate(tzoffset) {
  const UTCdatetime = new Date();
  const convertedDateTime = convertUTCDateTime(UTCdatetime, tzoffset);
  const { year, month, day, weekday } = convertedDateTime;
  return { year, month, day, weekday };
}

// Format date object
function formatDate(dateObj) {
  // eslint-disable-next-line prefer-const
  let { year, month, day, weekday } = dateObj;
  month = months[month];
  weekday = weekdays[weekday];
  return { year, month, day, weekday };
}

// Return a date object given the date in str form
function formatDateString(dateStr) {
  const year = dateStr.slice(0, 4);
  const month = months[dateStr.slice(5, 7) - FORMAT_OFFSET];
  const day = dateStr.slice(8);
  return { year, month, day };
}

// Produce formatted date object according to given timezone
function getFormattedCurDate(tzoffset) {
  const unformattedCurDate = getCurDate(tzoffset);
  const formattedCurDate = formatDate(unformattedCurDate);
  return formattedCurDate;
}

export { formatDateString, getFormattedCurDate };
