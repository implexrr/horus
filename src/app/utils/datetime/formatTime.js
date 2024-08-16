import convertUTCDateTime from './convertUTCDateTime';

function getCurTime(tzoffset) {
  const UTCdatetime = new Date();
  const convertedDateTime = convertUTCDateTime(UTCdatetime, tzoffset);
  const { hour, minute, second } = convertedDateTime;
  return { hour, minute, second };
}

function formatTimeUnit(timeUnit) {
  if (timeUnit < 10) { return `0${timeUnit}`; }
  return `${timeUnit}`;
}

function formatTime(timeObj) {
  let { hour, minute, second } = timeObj;
  hour = formatTimeUnit(hour);
  minute = formatTimeUnit(minute);
  second = formatTimeUnit(second);
  return { hour, minute, second };
}

export default function getFormattedCurTime(tzoffset) {
  const unformattedCurTime = getCurTime(tzoffset);
  const formattedCurTime = formatTime(unformattedCurTime);
  return formattedCurTime;
}
