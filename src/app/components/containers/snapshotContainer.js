import synthesizeElement from '../../utils/synthesizeElement';
import snapshotEl from '../displays/snapshot/snapshot';

const snapshotContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'snapshot-container' });
  el.appendChild(snapshotEl(rawData));
  return el;
};

export default snapshotContainerEl;
