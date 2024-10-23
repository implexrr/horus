import synthesizeElement from '../../utils/synthesizeElement';
import { containerComponent, dataComponent, iconComponent } from '../helperComponents';
import appendChildren from '../../utils/appendChildren';
import { setTempIconString } from '../../utils/dynamicSymbols';
import { formatDateString } from '../../utils/datetime/formatDate';

// Helper function for creating daily forecast components
const dailyAttr = (
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

// Create component for date
const dateEl = (dayData) => {
  const date = formatDateString(dayData.datetime);
  const el = dailyAttr('div', 'date', `${date.month} ${date.day}`, '', `${date.month} ${date.day}`, '');
  return el;
};

// Create component for conditions
const conditionsEl = (dayData) => {
  const el = dailyAttr('div', 'conditions', dayData.conditions, '', dayData.conditions, '');
  el.children[0].classList.add(`${dayData.icon}`);
  return el;
};

// Create component for max temp
const tempMinEl = (dayData) => {
  const metricTemp = dayData.tempmin;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = dailyAttr('div', 'temp', `Low: ${metricTemp}`, ' °C', `Low: ${imperialTemp}`, ' °F');
  const iconStr = setTempIconString(metricTemp);
  el.children[0].classList.add(iconStr);
  return el;
};

// Create component for min temp
const tempMaxEl = (dayData) => {
  const metricTemp = dayData.tempmax;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = dailyAttr('div', 'temp', `High: ${metricTemp}`, ' °C', `High: ${imperialTemp}`, ' °F');
  const iconStr = setTempIconString(metricTemp);
  el.children[0].classList.add(iconStr);
  return el;
};

// Create component for daily forecast card
const forecastCardDailyEl = (dayData) => {
  const el = synthesizeElement('div', { class: 'forecast-card daily' });
  appendChildren(
    el,
    dateEl(dayData),
    tempMinEl(dayData),
    tempMaxEl(dayData),
    conditionsEl(dayData),
  );
  return el;
};

export default forecastCardDailyEl;
