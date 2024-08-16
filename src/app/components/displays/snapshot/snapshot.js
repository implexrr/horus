import synthesizeElement from '../../../utils/synthesizeElement';
import weatherFormEl from '../../forms/weatherForm';
import appendChildren from '../../../utils/appendChildren';
import { containerComponent, dataComponent, iconComponent } from '../../helperComponents';
import getFormattedCurTime from '../../../utils/datetime/formatTime';
import getFormattedCurDate from '../../../utils/datetime/formatDate';

const snapshotAttr = (
  divOrSpan,
  dataAttr,
  metricMagnitude,
  metricUnit,
  imperialMagnitude,
  imperialUnit,
) => {
  const attrContainerEl = containerComponent(dataAttr);
  const iconEl = iconComponent(divOrSpan);
  const dataEl = dataComponent(
    divOrSpan,
    metricMagnitude,
    metricUnit,
    imperialMagnitude,
    imperialUnit,
  );
  appendChildren(attrContainerEl, iconEl, dataEl);
  return attrContainerEl;
};

// TODO: Move to new file
function setTempIconString(metricTemp) {
  let temp;
  if (metricTemp < 0) {
    temp = 'freezing';
  } else if (metricTemp >= 0 && metricTemp < 15) {
    temp = 'cold';
  } else if (metricTemp >= 15 && metricTemp < 30) {
    temp = 'warm';
  } else {
    temp = 'hot';
  }
  return temp;
}

const tempEl = (rawData) => {
  const metricTemp = rawData.currentConditions.temp;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = snapshotAttr('div', 'temp', metricTemp, ' °C', imperialTemp, ' °F');
  const iconStr = setTempIconString(metricTemp);
  el.children[0].classList.add(iconStr);
  return el;
};

const resolvedAddressEl = (rawData) => {
  const el = snapshotAttr('div', 'resolvedAddress', rawData.resolvedAddress, '', rawData.resolvedAddress, '');
  return el;
};

const dateEl = (rawData) => {
  const {
    year,
    month,
    day,
    weekday,
  } = getFormattedCurDate(rawData.tzoffset);
  const el = snapshotAttr('div', 'date', `${weekday}, ${month} ${day} ${year}`, '', `${weekday}, ${month} ${day} ${year}`, '');
  return el;
};

const timeEl = (rawData) => {
  const { hour, minute, second } = getFormattedCurTime(rawData.tzoffset);
  const el = snapshotAttr('div', 'time', `${hour}:${minute}:${second}`, '', `${hour}:${minute}:${second}`, '');
  return el;
};

const conditionsEl = (rawData) => {
  const el = snapshotAttr('div', 'conditions', rawData.currentConditions.conditions, '', rawData.currentConditions.conditions, '');
  el.children[0].classList.add(`${rawData.currentConditions.icon}`);
  return el;
};

const snapshotEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'snapshot' });
  appendChildren(
    el,
    dateEl(rawData),
    conditionsEl(rawData),
    resolvedAddressEl(rawData),
    timeEl(rawData),
    tempEl(rawData),
    weatherFormEl(),
  );
  return el;
};

export default snapshotEl;
