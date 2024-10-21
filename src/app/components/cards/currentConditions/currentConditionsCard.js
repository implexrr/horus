import appendChildren from '../../../utils/appendChildren';
import synthesizeElement from '../../../utils/synthesizeElement';
import { dataComponent, descriptionComponent, containerComponent } from '../../helperComponents';
import { setWindDirection } from '../../../utils/dynamicSymbols';

const KM_TO_MI_FACTOR = 0.621371;
const MM_TO_IN_FACTOR = 0.03973701;

// Create helper fxn(s)
// Helper function for writing current condition attributes
const currentConditionsAttr = (
  elType,
  dataAttrName,
  metricMagnitude,
  metricUnit,
  imperialMagnitude,
  imperialUnit,
  description,
) => {
  const containerEl = containerComponent(dataAttrName);
  const dataEl = dataComponent(
    elType,
    metricMagnitude,
    metricUnit,
    imperialMagnitude,
    imperialUnit,
  );
  const descriptionEl = descriptionComponent(elType, description);
  appendChildren(containerEl, descriptionEl, dataEl);
  return containerEl;
};

// Create component for sunrise description/data
const sunriseEl = (currentConditions) => {
  const el = currentConditionsAttr('div', 'sunrise', currentConditions.sunrise, '', currentConditions.sunrise, '', 'Sunrise:\u00A0');
  return el;
};

// Create component for sunset description/data
const sunsetEl = (currentConditions) => {
  const el = currentConditionsAttr('div', 'sunset', currentConditions.sunset, '', currentConditions.sunset, '', 'Sunset:\u00A0');
  return el;
};

// Create component for humidity description/data
const humidityEl = (currentConditions) => {
  const el = currentConditionsAttr('div', 'humidity', currentConditions.humidity, '%', currentConditions.humidity, '%', 'Humidity:\u00A0');
  return el;
};

// Create component for visibility description/data
const visibilityEl = (currentConditions) => {
  const metricVisibility = currentConditions.visibility;
  const imperialVisibility = (metricVisibility * KM_TO_MI_FACTOR).toFixed(1);
  const el = currentConditionsAttr('div', 'visibility', metricVisibility, 'km', imperialVisibility, 'mi', 'Visibility:\u00A0');
  return el;
};

// Create component for wind description/data
const windEl = (currentConditions) => {
  const winddir = setWindDirection(currentConditions.winddir);
  const metricWindspeed = currentConditions.windspeed;
  const imperialWindspeed = (metricWindspeed * KM_TO_MI_FACTOR).toFixed(1);
  const el = currentConditionsAttr('div', 'winddir', metricWindspeed, `kph${winddir}`, imperialWindspeed, `mph${winddir}`, 'Wind:\u00A0');
  return el;
};

// Create component for precip description/data
const precipEl = (currentConditions) => {
  const metricPrecip = currentConditions.precip;
  const imperialPrecip = (metricPrecip * MM_TO_IN_FACTOR).toFixed(2);
  const { preciptype } = currentConditions;
  const { precipprob } = currentConditions;
  const el = currentConditionsAttr('div', 'precip', `${precipprob}% chance of ${preciptype}, ${metricPrecip}`, 'mm', `${precipprob}% chance of ${preciptype}, ${imperialPrecip}`, 'in', 'Precipitation:\u00A0');
  return el;
};

// Create current conditions card component
const currentConditionsCardEl = (currentConditions) => {
  const el = synthesizeElement('div', { id: 'current-conditions-card' });
  appendChildren(
    el,
    sunriseEl(currentConditions),
    sunsetEl(currentConditions),
    humidityEl(currentConditions),
    visibilityEl(currentConditions),
    windEl(currentConditions),
    precipEl(currentConditions),
  );
  return el;
};

export default currentConditionsCardEl;
