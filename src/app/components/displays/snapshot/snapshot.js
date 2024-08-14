import synthesizeElement from '../../../utils/synthesizeElement';
import weatherFormEl from '../../forms/weatherForm';
import appendChildren from '../../../utils/appendChildren';
import { containerComponent, dataComponent, iconComponent } from '../../helperComponents';

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

// TODO: Dynamically render temp icon
const tempEl = (rawData) => {
  const metricTemp = rawData.currentConditions.temp;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = snapshotAttr('div', 'temp', metricTemp, ' °C', imperialTemp, ' °F');
  const iconStr = setTempIconString(metricTemp);
  el.children[0].classList.add(iconStr);
  return el;
};

// TODO: Change associated svg
const resolvedAddressEl = (rawData) => {
  const el = snapshotAttr('div', 'resolvedAddress', rawData.resolvedAddress, '', rawData.resolvedAddress, '');
  return el;
};

// TODO: replace with real datetime obj
const datetimeEl = (rawData) => {
  const el = snapshotAttr('div', 'datetime', rawData.currentConditions.datetime, '', rawData.currentConditions.datetime, '');
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
    conditionsEl(rawData),
    resolvedAddressEl(rawData),
    datetimeEl(rawData),
    tempEl(rawData),
    weatherFormEl(),
  );
  return el;
};

export default snapshotEl;
