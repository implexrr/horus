import synthesizeElement from '../../utils/synthesizeElement';
import appendChildren from '../../utils/appendChildren';
import forecastCardHourlyEl from '../cards/forecastHourlyCard';

// Create container component for hourly card component
const hourlyContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'hourly-container' });
  let hours = 0;
  const curEpoch = rawData.currentConditions.datetimeEpoch;
  const curDayHours = rawData.days[0].hours;
  const nextDayHours = rawData.days[1].hours;

  // Go through current day and append all hours that come after current hour, up to 24hrs ahead
  for (let i = 0; i < curDayHours.length; i += 1) {
    if (hours >= 24) { return el; }
    if (curEpoch < curDayHours[i].datetimeEpoch) {
      appendChildren(el, forecastCardHourlyEl(curDayHours[i]));
      hours += 1;
    }
  }

  // Go through next day and append all hours that come after current hour, up to 24hrs ahead
  for (let i = 0; i < nextDayHours.length; i += 1) {
    if (hours >= 24) { return el; }
    if (curEpoch < nextDayHours[i].datetimeEpoch) {
      appendChildren(el, forecastCardHourlyEl(nextDayHours[i]));
      hours += 1;
    }
  }
  return el;
};

export default hourlyContainerEl;
