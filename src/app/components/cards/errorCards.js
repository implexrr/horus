import synthesizeElement from '../../utils/synthesizeElement';

// Create error message for location not found
const locationNotFoundEl = (location) => {
  const el = synthesizeElement('div', { id: 'locationNotFoundError', class: 'hidden-message' });
  el.textContent = `Could not find data for "${location}"`;
  return el;
};

// Create error message for server down
const serverDownEl = () => {
  const el = synthesizeElement('div', { id: 'serverNotRespondingError', class: 'hidden-message' });
  el.textContent = 'Visual Crossing API not responding';
  return el;
};

export { locationNotFoundEl, serverDownEl };
