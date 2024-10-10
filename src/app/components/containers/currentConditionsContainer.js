import synthesizeElement from '../../utils/synthesizeElement';

// Create container component for current conditions card component
const currentConditionsContainerEl = () => {
  const el = synthesizeElement('div', { id: 'current-conditions-container' });
  return el;
};

export default currentConditionsContainerEl;
