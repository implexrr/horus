import appendChildren from '../../utils/appendChildren';
import synthesizeElement from '../../utils/synthesizeElement';
import currentConditionsCardEl from '../cards/currentConditionsCard';

// Create container component for current conditions card component
const currentConditionsContainerEl = (currentConditions) => {
  const el = synthesizeElement('div', { id: 'current-conditions-container' });
  appendChildren(el, currentConditionsCardEl(currentConditions));
  return el;
};

export default currentConditionsContainerEl;
