import synthesizeElement from '../../../utils/synthesizeElement';
import { changeSystem } from '../../../services/selectSystem';

const imperialButtonEl = () => {
  const e = synthesizeElement('button', { class: 'imperial' });
  e.textContent = 'Imperial';
  e.addEventListener('click', () => { changeSystem('imperial'); });
  return e;
};

const metricButtonEl = () => {
  const e = synthesizeElement('button', { class: 'metric' });
  e.textContent = 'Metric';
  e.addEventListener('click', () => { changeSystem('metric'); });
  return e;
};

export { imperialButtonEl, metricButtonEl };
