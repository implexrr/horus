import convertUTCDateTime from './convertUTCDateTime';

// Get unformatted time object according to given timezone
function getCurTime(tzoffset) {
  const UTCdatetime = new Date();
  const convertedDateTime = convertUTCDateTime(UTCdatetime, tzoffset);
  const { hour, minute, second } = convertedDateTime;
  return { hour, minute, second };
}

// Helper function for formatting time units
function formatTimeUnit(timeUnit) {
  if (timeUnit < 10) { return `0${timeUnit}`; }
  return `${timeUnit}`;
}

// Format time object
function formatTime(timeObj) {
  let { hour, minute, second } = timeObj;
  hour = formatTimeUnit(hour);
  minute = formatTimeUnit(minute);
  second = formatTimeUnit(second);
  return { hour, minute, second };
}

// Get formatted time object according to given timezone
export default function getFormattedCurTime(tzoffset) {
  const unformattedCurTime = getCurTime(tzoffset);
  const formattedCurTime = formatTime(unformattedCurTime);
  return formattedCurTime;
}
