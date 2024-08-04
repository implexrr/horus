import synthesizeElement from '../../utils/synthesizeElement';

export default function snapshotContainerEl() {
  const el = synthesizeElement('div', { id: 'snapshot-container' });
  return el;
}
