import appendChildren from '../../utils/appendChildren';
import synthesizeElement from '../../utils/synthesizeElement';
import forecastCardDaily from '../cards/forecastDailyCard';

// Create container component for daily card component
const dailyContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'daily-container' });
  for (let i = 0; i < rawData.days.length; i += 1) {
    // console.log(rawData.days[i]);
    appendChildren(el, forecastCardDaily(rawData.days[i]));
  }
  return el;
};

export default dailyContainerEl;
