import synthesizeElement from '../../utils/synthesizeElement';
import locationInputEl from '../inputs/locationInput';
import appendChildren from '../../utils/appendChildren';

const buttonEl = () => {
  const el = synthesizeElement('button', {});
  return el;
};

const searchBoxEl = () => {
  const el = synthesizeElement('div', { id: 'search-box' });
  appendChildren(el, locationInputEl(), buttonEl());
  return el;
};

const weatherFormEl = () => {
  const el = synthesizeElement('form', { id: 'weather-form' });
  appendChildren(el, searchBoxEl(), buttonEl());
  return el;
};

export default weatherFormEl;
