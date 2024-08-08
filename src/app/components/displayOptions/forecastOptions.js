import synthesizeElement from '../../utils/synthesizeElement';
import appendChildren from '../../utils/appendChildren';
import { dailyButtonEl, hourlyButtonEl } from '../buttons/forecastButtons';

const forecastOptionsEl = () => {
  const el = synthesizeElement('div', { id: 'forecast-options' });
  appendChildren(el, dailyButtonEl(), document.createTextNode(' | '), hourlyButtonEl());
  return el;
};

export default forecastOptionsEl;
