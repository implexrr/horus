import synthesizeElement from '../../utils/synthesizeElement';

const imperialButtonEl = () => {
  const e = synthesizeElement('button', { class: 'imperial' });
  e.textContent = 'Imperial';
  return e;
};

const metricButtonEl = () => {
  const e = synthesizeElement('button', { class: 'metric' });
  e.textContent = 'Metric';
  return e;
};

export { imperialButtonEl, metricButtonEl };
