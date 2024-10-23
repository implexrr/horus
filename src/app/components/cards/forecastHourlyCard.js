import synthesizeElement from '../../utils/synthesizeElement';
import { containerComponent, dataComponent, iconComponent } from '../helperComponents';
import appendChildren from '../../utils/appendChildren';
import { setTempIconString } from '../../utils/dynamicSymbols';

// Helper function for creating hourly forecast components
const hourlyAttr = (
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

// Create component for time
const timeEl = (hourData) => {
  const el = hourlyAttr('div', 'time', hourData.datetime, '', hourData.datetime, '');
  return el;
};

// Create component for temperature
const tempEl = (hourData) => {
  const metricTemp = hourData.temp;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = hourlyAttr('div', 'temp', metricTemp, ' °C', imperialTemp, ' °F');
  const iconStr = setTempIconString(metricTemp);
  el.children[0].classList.add(iconStr);
  return el;
};

// Create component for conditions
const conditionsEl = (hourData) => {
  const el = hourlyAttr('div', 'conditions', hourData.conditions, '', hourData.conditions, '');
  el.children[0].classList.add(`${hourData.icon}`);
  return el;
};

// Create component for hourly forecast card
const forecastCardHourlyEl = (hourData) => {
  const el = synthesizeElement('div', { class: 'forecast-card daily' });
  appendChildren(
    el,
    timeEl(hourData),
    tempEl(hourData),
    conditionsEl(hourData),
  );
  return el;
};

export default forecastCardHourlyEl;
