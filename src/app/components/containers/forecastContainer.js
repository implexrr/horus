import synthesizeElement from '../../utils/synthesizeElement';

// Create container component for forecast card component
const forecastContainerEl = () => {
  const el = synthesizeElement('div', { id: 'forecast-container' });
  return el;
};

export default forecastContainerEl;
