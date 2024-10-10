import mod from '../utils/lazyMath';
import convertUTCDateTime from '../utils/datetime/convertUTCDateTime';

const DAY_LENGTH = 24 * 60 * 60;
const LAST_PHASE = 11;

function convertToSeconds(hours, minutes, seconds) {
  return (hours * 60 * 60) + (minutes * 60) + (seconds);
}

// Extract the total number of seconds from a hh:mm:ss string
function extractSunData(sunString) {
  const sunData = {
    hour: parseInt(sunString.slice(0, 2), 10),
    minute: parseInt(sunString.slice(3, 5), 10),
    second: parseInt(sunString.slice(6, 8), 10),
  };
  const sunTotal = convertToSeconds(sunData.hour, sunData.minute, sunData.second);
  return sunTotal;
}

// Calculate the end of each sunphase (there are 12) based on sunrise and sunset times
function calculateSunPhases(sunrise, sunset) {
  const mid = sunset - sunrise;
  const phaseEnd = [
    mid * (1 / 6),
    mid * (2 / 6),
    mid * (3 / 6),
    mid * (4 / 6),
    mid * (5 / 6),
    mid * (6 / 6),
    mid + ((DAY_LENGTH - mid) * (1 / 6)),
    mid + ((DAY_LENGTH - mid) * (2 / 6)),
    mid + ((DAY_LENGTH - mid) * (3 / 6)),
    mid + ((DAY_LENGTH - mid) * (4 / 6)),
    mid + ((DAY_LENGTH - mid) * (5 / 6)),
    mid + ((DAY_LENGTH - mid) * (6 / 6)),
  ];
  return phaseEnd;
}

// Calculate which sunphase the current time falls into
function calculateCurPhase(curTime, sunrise, sunset) {
  const phases = calculateSunPhases(sunrise, sunset);
  const convertedCurTime = mod(curTime - sunrise, DAY_LENGTH);
  for (let phase = 0; phase < phases.length; phase += 1) {
    if (convertedCurTime <= phases[phase]) {
      return phase;
    }
  }
  return LAST_PHASE; // just in case
}

// Change background based on time and load iteration
export default function changeBackground(rawData, firstLoad) {
  const UTCTime = new Date();
  const currentTime = convertUTCDateTime(UTCTime, rawData.tzoffset);
  const htmlEl = document.querySelector('html');

  // Safety: In case sunrise or sunset data can't be read, default to sunphase 1
  if (!('sunrise' in rawData.currentConditions && 'sunset' in rawData.currentConditions)) {
    htmlEl.setAttribute('class', 'phase1');
    return;
  }

  // Set background according to current sunphase
  const sunrise = extractSunData(rawData.currentConditions.sunrise);
  const sunset = extractSunData(rawData.currentConditions.sunset);
  const current = convertToSeconds(currentTime.hour, currentTime.minute, currentTime.second);
  const currentPhase = calculateCurPhase(current, sunrise, sunset);
  htmlEl.setAttribute('class', `phase${currentPhase}`);

  // Safety: Only add background transition if this isn't the first time loading the page
  if (!(firstLoad)) { htmlEl.classList.add('change-background-transition'); }
}
