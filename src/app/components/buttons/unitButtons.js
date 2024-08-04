import synthesizeElement from '../../utils/synthesizeElement';

function imperialButtonEl() {
  const e = synthesizeElement('button', { class: 'imperial' });
  e.textContent = 'Imperial';
  return e;
}

function metricButtonEl() {
  const e = synthesizeElement('button', { class: 'metric' });
  e.textContent = 'Metric';
  return e;
}

export { imperialButtonEl, metricButtonEl };
