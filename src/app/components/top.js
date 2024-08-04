import synthesizeElement from '../utils/synthesizeElement';

export default function createTopEl() {
  const topEl = synthesizeElement('div', { id: 'top' });
  return topEl;
}
