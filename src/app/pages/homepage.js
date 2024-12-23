import synthesizeElement from '../utils/synthesizeElement';
import currentConditionsContainerEl from '../components/containers/currentConditionsContainer';
import forecastContainerEl from '../components/containers/forecastContainer';
import snapshotContainerEl from '../components/containers/snapshotContainer';
import measurementSystemOptionsEl from '../components/displayOptions/measurementSystemOptions';
import forecastOptionsEl from '../components/displayOptions/forecastOptions';
import appendChildren from '../utils/appendChildren';
import getRawData from '../services/weatherData';
import { changeMeasurementSystem } from '../services/selectSystem';
import { changeForecastType } from '../services/selectForecastType';
import changeBackground from '../services/changeBackground';
import { locationNotFoundEl, serverDownEl } from '../components/cards/errorCards';

// Use raw JSON data to render top half of homepage
const topEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'top' });
  appendChildren(
    el,
    measurementSystemOptionsEl(),
    snapshotContainerEl(rawData),
    currentConditionsContainerEl(rawData.currentConditions),
  );
  return el;
};

// Use raw JSON data to render bottom half of homepage
const bottomEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'bottom' });
  appendChildren(el, forecastOptionsEl(), forecastContainerEl(rawData));
  return el;
};

// Use raw JSON data to render homepage
const homepage = async (locationQuery, measurementSystem, forecastType, isFirstLoad) => {
  // Pull raw JSON data according to location query
  const rawData = await getRawData(locationQuery);
  const bodyEl = document.querySelector('body');
  console.log(rawData);

  // Catch data not retrievable errors
  if (rawData === 'location not found') {
    const locationErrorMsg = locationNotFoundEl(locationQuery);
    bodyEl.append(locationErrorMsg);
    locationErrorMsg.addEventListener('animationend', () => {
      locationErrorMsg.remove();
    });
  } else if (rawData === 'bad server response') {
    bodyEl.append(locationNotFoundEl(serverDownEl()));
  } else {
    // Reset homepage content
    bodyEl.textContent = '';

    // Change background based on time and load iteration
    changeBackground(rawData, isFirstLoad);

    // Append top and bottom half of homepage to body
    appendChildren(bodyEl, topEl(rawData), bottomEl(rawData));

    // Render data according to chosen system of measurement
    changeMeasurementSystem(measurementSystem);

    // Render data according to chosen forecast type
    changeForecastType(forecastType);

    // Clear any input error messages upon clicking any part of the website
    document.body.addEventListener('click', () => {
      document.querySelector('input#location').setCustomValidity('');
    });
  }
};

export default homepage;
