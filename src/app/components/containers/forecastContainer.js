import synthesizeElement from '../../utils/synthesizeElement';
import appendChildren from '../../utils/appendChildren';
import dailyContainerEl from './dailyContainer';
import hourlyContainerEl from './hourlyContainer';

// Create container component for forecast card component
const forecastContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'forecast-container' });
  appendChildren(el, dailyContainerEl(rawData), hourlyContainerEl(rawData));
  return el;
};

export default forecastContainerEl;
