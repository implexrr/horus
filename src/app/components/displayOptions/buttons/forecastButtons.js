import synthesizeElement from '../../../utils/synthesizeElement';

// Create button component that allows user to switch to daily forecasts
const dailyButtonEl = () => {
  const e = synthesizeElement('button', { class: 'daily' });
  e.textContent = 'Daily';
  return e;
};

// Create button component that allows user to switch to hourly forecasts
const hourlyButtonEl = () => {
  const e = synthesizeElement('button', { class: 'hourly' });
  e.textContent = 'Hourly';
  return e;
};

export { dailyButtonEl, hourlyButtonEl };
