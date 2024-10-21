import synthesizeElement from '../../utils/synthesizeElement';

// Create container component for daily card component
const dailyContainerEl = () => {
  const el = synthesizeElement('div', { id: 'daily-container' });
  return el;
};

export default dailyContainerEl;
