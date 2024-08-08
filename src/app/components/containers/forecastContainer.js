import synthesizeElement from '../../utils/synthesizeElement';

const forecastContainerEl = () => {
  const el = synthesizeElement('div', { id: 'forecast-container' });
  return el;
};

export default forecastContainerEl;
