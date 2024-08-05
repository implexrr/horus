import synthesizeElement from '../../utils/synthesizeElement';
import snapshot from '../snapshot';

export default function snapshotContainerEl() {
  const el = synthesizeElement('div', { id: 'snapshot-container' });
  el.appendChild(snapshot());
  return el;
}
