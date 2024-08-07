import synthesizeElement from '../utils/synthesizeElement';
import weatherFormEl from './forms/weatherForm';
import appendChildren from '../utils/appendChildren';

export default function snapshot() {
  const el = synthesizeElement('div', { id: 'snapshot' });
  el.textContent = window.fakedata;
  appendChildren(el, weatherFormEl());
  return el;
}
