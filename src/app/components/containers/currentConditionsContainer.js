import synthesizeElement from '../../utils/synthesizeElement';

export default function currentConditionsContainerEl() {
  const el = synthesizeElement('div', { id: 'current-conditions-container' });
  return el;
}
