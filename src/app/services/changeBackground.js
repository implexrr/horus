import mod from '../utils/lazyMath';
import convertUTCDateTime from '../utils/datetime/convertUTCDateTime';

const lengthOfDay = 24 * 60 * 60;

function convertToSeconds(hours, minutes, seconds) {
  return (hours * 60 * 60) + (minutes * 60) + (seconds);
}

function extractSunData(sunString) {
  const sunData = {
    hour: parseInt(sunString.slice(0, 2), 10),
    minute: parseInt(sunString.slice(3, 5), 10),
    second: parseInt(sunString.slice(6, 8), 10),
  };
  const sunTotal = convertToSeconds(sunData.hour, sunData.minute, sunData.second);
  return sunTotal;
}

function calculateSunPhases(sunrise, sunset) {
  const mid = sunset - sunrise;
  const phaseEnd = [
    mid * (1 / 6),
    mid * (2 / 6),
    mid * (3 / 6),
    mid * (4 / 6),
    mid * (5 / 6),
    mid * (6 / 6),
    mid + ((lengthOfDay - mid) * (1 / 6)),
    mid + ((lengthOfDay - mid) * (2 / 6)),
    mid + ((lengthOfDay - mid) * (3 / 6)),
    mid + ((lengthOfDay - mid) * (4 / 6)),
    mid + ((lengthOfDay - mid) * (5 / 6)),
    mid + ((lengthOfDay - mid) * (6 / 6)),
  ];
  return phaseEnd;
}

function calculateCurPhase(curTime, sunrise, sunset) {
  const phases = calculateSunPhases(sunrise, sunset);
  const cur = mod(curTime - sunrise, lengthOfDay);
  for (let i = 0; i < phases.length; i += 1) {
    if (cur <= phases[i]) {
      return i;
    }
  }
  return lengthOfDay; // just in case
}

export default function changeBackground(rawData, firstLoad) {
  const UTCTime = new Date();
  const currentTime = convertUTCDateTime(UTCTime, rawData.tzoffset);
  const htmlEl = document.querySelector('html');
  if (!('sunrise' in rawData.currentConditions && 'sunset' in rawData.currentConditions)) {
    htmlEl.setAttribute('class', 'phase1');
    return;
  }
  const sunrise = extractSunData(rawData.currentConditions.sunrise);
  const sunset = extractSunData(rawData.currentConditions.sunset);
  const current = convertToSeconds(currentTime.hour, currentTime.minute, currentTime.second);
  const currentPhase = calculateCurPhase(current, sunrise, sunset);
  htmlEl.setAttribute('class', `phase${currentPhase}`);
  if (!(firstLoad)) { htmlEl.classList.add('change-background-transition'); }
}
