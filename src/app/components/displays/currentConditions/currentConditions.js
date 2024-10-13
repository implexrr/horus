import appendChildren from '../../../utils/appendChildren';
import synthesizeElement from '../../../utils/synthesizeElement';
import { dataComponent, descriptionComponent, containerComponent } from '../../helperComponents';

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
  const imperialVisibility = (metricVisibility * 0.621371).toFixed(1);
  const el = currentConditionsAttr('div', 'visibility', metricVisibility, 'km', imperialVisibility, 'miles', 'Visibility:\u00A0');
  return el;
};

// Create component for winddir description/data
const winddirEl = (currentConditions) => {
  const el = currentConditionsAttr('div', 'winddir', currentConditions.winddir, '°', currentConditions.winddir, '°', 'Wind Direction:\u00A0');
  return el;
};

// Create component for windspeed description/data
const windspeedEl = (currentConditions) => {
  const metricWindspeed = currentConditions.windspeed;
  const imperialWindspeed = (metricWindspeed * 0.621371).toFixed(1);
  const el = currentConditionsAttr('div', 'windspeed', metricWindspeed, 'kmph', imperialWindspeed, 'mph', 'Wind Speed:\u00A0');
  return el;
};

// Create component for precip description/data
const precipEl = (currentConditions) => {
  const metricPrecip = currentConditions.precip;
  const imperialPrecip = metricPrecip * 0.03973701.toFixed(3);
  const el = currentConditionsAttr('div', 'precip', metricPrecip, 'mm', imperialPrecip, 'in', 'Precipitation:\u00A0');
  return el;
};

// Create component for precipprob description/data
const precipprobEl = (currentConditions) => {
  const el = currentConditionsAttr('div', 'precipprob', currentConditions.precipprob, '%', currentConditions.precipprob, '%', 'Precipitation Probability:\u00A0');
  return el;
};

// Create component for preciptype description/data
const preciptypeEl = (currentConditions) => {
  const el = currentConditionsAttr('div', 'preciptype', currentConditions.preciptype, '', currentConditions.preciptype, '', 'Precipitation Type:\u00A0');
  return el;
};

// Create current conditions card component
const currentConditionsEl = (currentConditions) => {
  const el = synthesizeElement('div', { id: 'current-conditions' });
  appendChildren(
    el,
    sunriseEl(currentConditions),
    sunsetEl(currentConditions),
    humidityEl(currentConditions),
    visibilityEl(currentConditions),
    winddirEl(currentConditions),
    windspeedEl(currentConditions),
    precipEl(currentConditions),
    precipprobEl(currentConditions),
    preciptypeEl(currentConditions),
  );
  return el;
};

export default currentConditionsEl;
/*
<div class="sunrise">
  <span class="icon">XX_XX </span>
  <span class="title">sunrise:</span>
  <span class="data">06:09</span>
</div>
<div class="sunset">
  <span class="icon">XX_XX</span>
  <span class="title">sunset:</span>
  <span class="data">20:41</span>
</div>
<div class="humidity">
  <span class="icon">XX_XX</span>
  <span class="title">humidity</span>
  <span class="data">14%</span>
</div>
<div class="visibility">
  <span class="icon">XX_XX</span>
  <span class="title">visibility</span>
  <span class="data switchable" data-metric="24km" data-imperial="14.9mi"></span>
</div>
<div class="winddir">
  <span class="icon">XX_XX</span>
  <span class="title">wind direction:</span>
  <span class="data">NNW</span>
</div>
<div class="windspeed">
  <span class="icon">XX_XX</span>
  <span class="title">wind speed:</span>
  <span class="data switchable" data-metric="12kph" data-imperial="7.5mph"></span>
</div>
<div class="precip">
  <span class="icon">XX_XX</span>
  <span class="title">precipitation:</span>
  <span class="data switchable" data-metric="15mm" data-imperial="0.6in"></span>
</div>
<div class="precipprob">
  <span class="icon">XX_XX</span>
  <span class="title">precipitation probability:</span>
  <span class="data">40%</span>
</div>
<div class="preciptype">
  <span class="icon">XX_XX</span>
  <span class="title">precipitation type:</span>
  <span class="data">rain</span>
</div>
*/
