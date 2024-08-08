import synthesizeElement from '../../utils/synthesizeElement';
import snapshot from '../snapshot';

const snapshotContainerEl = () => {
  const el = synthesizeElement('div', { id: 'snapshot-container' });
  el.appendChild(snapshot());
  return el;
};

export default snapshotContainerEl;
