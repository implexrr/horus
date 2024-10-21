import synthesizeElement from '../../utils/synthesizeElement';
import snapshotCardEl from '../cards/snapshot/snapshotCard';

// Create container component for snapshot card component
const snapshotContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'snapshot-container' });
  el.appendChild(snapshotCardEl(rawData));
  return el;
};

export default snapshotContainerEl;
