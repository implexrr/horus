import synthesizeElement from '../../utils/synthesizeElement';
import locationInput from '../inputs/locationInput';
import appendChildren from '../../utils/appendChildren';

function buttonEl() {
  const el = synthesizeElement('button', {});
  return el;
}

function searchBoxEl() {
  const el = synthesizeElement('div', { id: 'search-box' });
  appendChildren(el, locationInput(), buttonEl());
  return el;
}

export default function weatherFormEl() {
  const el = synthesizeElement('form', { id: 'weather-form' });
  appendChildren(el, searchBoxEl(), buttonEl());
  return el;
}
