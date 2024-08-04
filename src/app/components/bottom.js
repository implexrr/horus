import synthesizeElement from '../utils/synthesizeElement';

export default function createBottomEl() {
  const bottomEl = synthesizeElement('div', { id: 'bottom' });
  return bottomEl;
}
