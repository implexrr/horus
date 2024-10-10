import synthesizeElement from '../utils/synthesizeElement';
import currentConditionsContainerEl from '../components/containers/currentConditionsContainer';
import forecastContainerEl from '../components/containers/forecastContainer';
import snapshotContainerEl from '../components/containers/snapshotContainer';
import measurementSystemOptionsEl from '../components/displayOptions/measurementSystemOptions';
import forecastOptionsEl from '../components/displayOptions/forecastOptions';
import appendChildren from '../utils/appendChildren';
import getRawData from '../services/weatherData';
import { changeSystem } from '../services/selectSystem';
import changeBackground from '../services/changeBackground';

// Use raw JSON data to render top half of homepage
const topEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'top' });
  appendChildren(
    el,
    measurementSystemOptionsEl(),
    snapshotContainerEl(rawData),
    currentConditionsContainerEl(),
  );
  return el;
};

// Use raw JSON data to render bottom half of homepage
const bottomEl = () => {
  const el = synthesizeElement('div', { id: 'bottom' });
  appendChildren(el, forecastOptionsEl(), forecastContainerEl());
  return el;
};

// Use raw JSON data to render homepage
const homepage = async (locationQuery, measurementSystem, isFirstLoad) => {
  // Pull raw JSON data according to location query
  const rawData = await getRawData(locationQuery);

  // Reset homepage content
  const bodyEl = document.querySelector('body');
  bodyEl.textContent = '';

  // Change background based on time and load iteration
  changeBackground(rawData, isFirstLoad);

  // Append top and bottom half of homepage to body
  appendChildren(bodyEl, topEl(rawData), bottomEl());

  // Render data according to chosen system of measurement
  changeSystem(measurementSystem);
};

export default homepage;
