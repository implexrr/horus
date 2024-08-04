import synthesizeElement from '../../utils/synthesizeElement';

function dailyButtonEl() {
  const e = synthesizeElement('button', { class: 'daily' });
  e.textContent = 'Daily';
  return e;
}

function hourlyButtonEl() {
  const e = synthesizeElement('button', { class: 'hourly' });
  e.textContent = 'Hourly';
  return e;
}

export { dailyButtonEl, hourlyButtonEl };
