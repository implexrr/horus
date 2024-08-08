import synthesizeElement from '../../utils/synthesizeElement';

const dailyButtonEl = () => {
  const e = synthesizeElement('button', { class: 'daily' });
  e.textContent = 'Daily';
  return e;
};

const hourlyButtonEl = () => {
  const e = synthesizeElement('button', { class: 'hourly' });
  e.textContent = 'Hourly';
  return e;
};

export { dailyButtonEl, hourlyButtonEl };
