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

const tempEl = (rawData) => {
  const metricTemp = rawData.currentConditions.temp;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = snapshotAttr('div', 'temp', metricTemp, ' °C', imperialTemp, ' °F');
  return el;
};

// clear-day
// clear-night
// cloudy
// fog
// hail
// partly-cloudy-day
// partly-cloudy-night
// rain-snow-showers-day
// rain-snow-showers-night
// rain-snow
// rain
// showers-day
// showers-night
// sleet
// snow-showers-day
// snow-showers-night
// snow
// thunder-rain
// thunder-showers-day
// thunder-showers-night
// thunder
// wind
// eaecf3 sorta white
// 999dae lighter grey
// FFC300 yellow
// 4764cd blue
const conditionsEl = (rawData) => {
  const el = snapshotAttr('div', 'conditions', rawData.currentConditions.conditions, '', rawData.currentConditions.conditions, '');
  el.children[0].setAttribute('class', `${rawData.currentConditions.icon}`);
  return el;
};

const resolvedAddressEl = (rawData) => {
  const el = snapshotAttr('div', 'resolvedAddress', rawData.resolvedAddress, '', rawData.resolvedAddress, '');
  return el;
};

// TODO: replace with real datetime obj
const datetimeEl = (rawData) => {
  const el = snapshotAttr('div', 'datetime', rawData.currentConditions.datetime, '', rawData.currentConditions.datetime, '');
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
