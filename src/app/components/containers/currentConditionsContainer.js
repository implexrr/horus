import appendChildren from '../../utils/appendChildren';
import synthesizeElement from '../../utils/synthesizeElement';
import currentConditionsEl from '../displays/currentConditions/currentConditions';

// Create container component for current conditions card component
const currentConditionsContainerEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'current-conditions-container' });
  appendChildren(el, currentConditionsEl(rawData));
  return el;
};

export default currentConditionsContainerEl;
