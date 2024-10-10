import synthesizeElement from '../../utils/synthesizeElement';
import snapshotEl from '../displays/snapshot/snapshot';

// Create container component for snapshot card component
const snapshotContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'snapshot-container' });
  el.appendChild(snapshotEl(rawData));
  return el;
};

export default snapshotContainerEl;
