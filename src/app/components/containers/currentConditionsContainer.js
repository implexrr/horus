import synthesizeElement from '../../utils/synthesizeElement';

const currentConditionsContainerEl = () => {
  const el = synthesizeElement('div', { id: 'current-conditions-container' });
  return el;
};

export default currentConditionsContainerEl;
