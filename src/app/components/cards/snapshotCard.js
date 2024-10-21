import synthesizeElement from '../../utils/synthesizeElement';
import weatherFormEl from '../forms/weatherForm';
import appendChildren from '../../utils/appendChildren';
import { containerComponent, dataComponent, iconComponent } from '../helperComponents';
import getFormattedCurTime from '../../utils/datetime/formatTime';
import getFormattedCurDate from '../../utils/datetime/formatDate';
import { setTempIconString } from '../../utils/dynamicSymbols';

// Helper function for creating snapshot attributes
const snapshotAttr = (
  elType,
  dataAttrName,
  metricMagnitude,
  metricUnit,
  imperialMagnitude,
  imperialUnit,
) => {
  const containerEl = containerComponent(dataAttrName);
  const iconEl = iconComponent(elType);
  const dataEl = dataComponent(
    elType,
    metricMagnitude,
    metricUnit,
    imperialMagnitude,
    imperialUnit,
  );
  appendChildren(containerEl, iconEl, dataEl);
  return containerEl;
};

// Create component for feels like value
const feelsLikeEl = (rawData) => {
  const metricFeelsTemp = rawData.currentConditions.feelslike;
  const imperialFeelsTemp = ((metricFeelsTemp * 1.8) + 32).toFixed(1);
  const el = document.createElement('span');
  const elData = dataComponent('span', metricFeelsTemp, ' °C)', imperialFeelsTemp, ' °F)');
  const elDataPrefix = document.createElement('span');
  elDataPrefix.textContent = '\u00A0(Feels like: ';
  appendChildren(el, elDataPrefix, elData);
  return el;
};

// Create component for temperature icon/data
const tempEl = (rawData) => {
  const metricTemp = rawData.currentConditions.temp;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = snapshotAttr('div', 'temp', metricTemp, ' °C', imperialTemp, ' °F');
  const iconStr = setTempIconString(metricTemp);
  el.children[0].classList.add(iconStr);
  el.appendChild(feelsLikeEl(rawData));
  return el;
};

// Create component for resolved address icon/data
const resolvedAddressEl = (rawData) => {
  const el = snapshotAttr('div', 'resolvedAddress', rawData.resolvedAddress, '', rawData.resolvedAddress, '');
  return el;
};

// Create component for date icon/data
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

// Create component for time icon/data
const timeEl = (rawData) => {
  const { hour, minute, second } = getFormattedCurTime(rawData.tzoffset);
  const el = snapshotAttr('div', 'time', `${hour}:${minute}:${second}`, '', `${hour}:${minute}:${second}`, '');
  return el;
};

// Create component for (current) conditions icon/data
const conditionsEl = (rawData) => {
  const el = snapshotAttr('div', 'conditions', rawData.currentConditions.conditions, '', rawData.currentConditions.conditions, '');
  el.children[0].classList.add(`${rawData.currentConditions.icon}`);
  return el;
};

// Create snapshot card component
const snapshotCardEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'snapshot-card' });
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

export default snapshotCardEl;
