import synthesizeElement from '../../utils/synthesizeElement';
import displayData from '../../services/changeUnits';

const imperialButtonEl = () => {
  const e = synthesizeElement('button', { class: 'imperial' });
  e.textContent = 'Imperial';
  e.addEventListener('click', () => { displayData('imperial'); });
  return e;
};

const metricButtonEl = () => {
  const e = synthesizeElement('button', { class: 'metric' });
  e.textContent = 'Metric';
  e.addEventListener('click', () => { displayData('metric'); });
  return e;
};

export { imperialButtonEl, metricButtonEl };
