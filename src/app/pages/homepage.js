import synthesizeElement from '../utils/synthesizeElement';
import currentConditionsContainerEl from '../components/containers/currentConditionsContainer';
import forecastContainerEl from '../components/containers/forecastContainer';
import snapshotContainerEl from '../components/containers/snapshotContainer';
import unitOptionsEl from '../components/displayOptions/unitOptions';
import forecastOptionsEl from '../components/displayOptions/forecastOptions';
import appendChildren from '../utils/appendChildren';
import getRawData from '../services/weatherData';
import { changeSystem } from '../services/selectSystem';

const topEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'top' });
  appendChildren(el, unitOptionsEl(), snapshotContainerEl(rawData), currentConditionsContainerEl());
  return el;
};

const bottomEl = () => {
  const el = synthesizeElement('div', { id: 'bottom' });
  appendChildren(el, forecastOptionsEl(), forecastContainerEl());
  return el;
};

const reloadHomepage = async (locationQuery, unitType) => {
  const rawData = await getRawData(locationQuery);
  console.log(rawData);
  const bodyEl = document.querySelector('body');
  bodyEl.textContent = '';
  appendChildren(bodyEl, topEl(rawData), bottomEl());
  changeSystem(unitType);
};

export default reloadHomepage;
