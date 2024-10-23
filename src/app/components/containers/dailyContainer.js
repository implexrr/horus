import appendChildren from '../../utils/appendChildren';
import synthesizeElement from '../../utils/synthesizeElement';
import forecastCardDailyEl from '../cards/forecastDailyCard';

// Create container component for daily card component
const dailyContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'daily-container' });
  for (let day = 0; day < rawData.days.length; day += 1) {
    appendChildren(el, forecastCardDailyEl(rawData.days[day]));
  }
  return el;
};

export default dailyContainerEl;
