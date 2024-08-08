import synthesizeElement from '../utils/synthesizeElement';
import currentConditionsContainerEl from '../components/containers/currentConditionsContainer';
import forecastContainerEl from '../components/containers/forecastContainer';
import snapshotContainerEl from '../components/containers/snapshotContainer';
import unitOptionsEl from '../components/displayOptions/unitOptions';
import forecastOptionsEl from '../components/displayOptions/forecastOptions';
import appendChildren from '../utils/appendChildren';
import getRawData from '../services/weatherData';
import selectUnits from '../services/selectUnits';

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

const homepage = async (locationQuery, units) => {
  const rawData = await getRawData(locationQuery);
  console.log(rawData);
  const bodyEl = document.querySelector('body');
  appendChildren(bodyEl, topEl(rawData), bottomEl());
  selectUnits(units);
};

export default homepage;
