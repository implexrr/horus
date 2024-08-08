import synthesizeElement from '../../utils/synthesizeElement';
import snapshotEl from '../displays/snapshot/snapshot';

const snapshotContainerEl = () => {
  const el = synthesizeElement('div', { id: 'snapshot-container' });
  el.appendChild(snapshotEl());
  return el;
};

export default snapshotContainerEl;
