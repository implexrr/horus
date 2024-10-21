import synthesizeElement from '../../utils/synthesizeElement';

// Create container component for hourly card component
const hourlyContainerEl = () => {
  const el = synthesizeElement('div', { id: 'hourly-container' });
  return el;
};

export default hourlyContainerEl;
