import mod from './lazyMath';

const TEMPERATURE = {
  COLD: 0,
  WARM: 15,
  HOT: 30,
};

const DIRECTION = {
  NE: 45,
  E: 90,
  SE: 135,
  S: 180,
  SW: 225,
  W: 270,
  NW: 315,
  N: 360,
};

function setTempIconString(metricTemp) {
  if (metricTemp < TEMPERATURE.COLD) { return 'freezing'; }
  if (metricTemp < TEMPERATURE.WARM) { return 'cold'; }
  if (metricTemp < TEMPERATURE.HOT) { return 'warm'; }
  return 'hot';
}

function setWindDirection(degrees) {
  const winddir = mod(degrees, 360);
  if (winddir < DIRECTION.NE / 2) { return '⬆ (North)'; } // 0 to 22.5
  if (winddir < (DIRECTION.E + DIRECTION.NE) / 2) { return '⬈ (Northeast)'; } // 22.5 to 67.5
  if (winddir < (DIRECTION.E + DIRECTION.SE) / 2) { return '⮕ (East)'; } // 67.5 to 112.5
  if (winddir < (DIRECTION.SE + DIRECTION.S) / 2) { return '⬊ (Southeast)'; } // 112.5 to 157.5
  if (winddir < (DIRECTION.S + DIRECTION.SW) / 2) { return '⬇ (South)'; } // 157.5 + 202.5
  if (winddir < (DIRECTION.SW + DIRECTION.W) / 2) { return '⬋ (Southwest)'; } // 202.5 to 247.5
  if (winddir < (DIRECTION.W + DIRECTION.NW) / 2) { return '⬅ (West)'; } // 247.5 to 292.5
  if (winddir < (DIRECTION.NW + DIRECTION.N) / 2) { return '⬉ (Northwest)'; } // 292.5 to 337.5
  return '⬆ (North)'; // 337.5 to 360;
}

export { setTempIconString, setWindDirection };
