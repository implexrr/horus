import synthesizeElement from '../../../utils/synthesizeElement';
import { changeSystem } from '../../../services/selectSystem';

// Create button component that allows user to switch to imperial system
const imperialButtonEl = () => {
  const e = synthesizeElement('button', { class: 'imperial' });
  e.textContent = 'Imperial';
  e.addEventListener('click', () => { changeSystem('imperial'); });
  return e;
};

// Create button component that allows user to switch to metric system
const metricButtonEl = () => {
  const e = synthesizeElement('button', { class: 'metric' });
  e.textContent = 'Metric';
  e.addEventListener('click', () => { changeSystem('metric'); });
  return e;
};

export { imperialButtonEl, metricButtonEl };
