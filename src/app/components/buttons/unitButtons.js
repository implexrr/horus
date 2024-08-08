import synthesizeElement from '../../utils/synthesizeElement';
import displayData from '../../services/selectUnits';

const imperialButtonEl = () => {
  const e = synthesizeElement('button', { class: 'imperial' });
  e.textContent = 'Imperial';
  e.addEventListener('click', () => { displayData('imperial'); });
  // document.querySelector('button.metric').classList.remove('selected');
  // document.querySelector('button.imperial').classList.add('selected');
  return e;
};

const metricButtonEl = () => {
  const e = synthesizeElement('button', { class: 'metric' });
  e.textContent = 'Metric';
  e.addEventListener('click', () => { displayData('metric'); });
  // document.querySelector('button.imperial').classList.remove('selected');
  // document.querySelector('button.metric').classList.add('selected');
  return e;
};

export { imperialButtonEl, metricButtonEl };
