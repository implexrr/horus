import synthesizeElement from '../../utils/synthesizeElement';
import locationInput from '../inputs/locationInput';
import appendChildren from '../../utils/appendChildren';
// import handleFormSubmission from '../../services/handleFormSubmission';

const buttonEl = () => {
  const el = synthesizeElement('button', {});
  return el;
};

const searchBoxEl = () => {
  const el = synthesizeElement('div', { id: 'search-box' });
  appendChildren(el, locationInput(), buttonEl());
  return el;
};

const weatherFormEl = () => {
  const el = synthesizeElement('form', { id: 'weather-form' });
  // el.addEventListener('submit', handleFormSubmission);
  appendChildren(el, searchBoxEl(), buttonEl());
  return el;
};

export default weatherFormEl;
