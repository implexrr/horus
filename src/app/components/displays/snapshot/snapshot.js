import synthesizeElement from '../../../utils/synthesizeElement';
import weatherFormEl from '../../forms/weatherForm';
import appendChildren from '../../../utils/appendChildren';

const snapshotEl = () => {
  const el = synthesizeElement('div', { id: 'snapshot' });
  appendChildren(el, weatherFormEl());
  return el;
};

export default snapshotEl;
