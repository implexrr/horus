import synthesizeElement from '../utils/synthesizeElement';

// Create component containing imperial/metric magnitudes/units hidden within HTML data attributes
const dataComponent = (elType, metricMagnitude, metricUnit, imperialMagnitude, imperialUnit) => {
  const el = synthesizeElement(elType, {
    class: 'data',
    'data-metricmagnitude': metricMagnitude,
    'data-metricunit': metricUnit,
    'data-imperialmagnitude': imperialMagnitude,
    'data-imperialunit': imperialUnit,
  });
  return el;
};

// Create icon component
const iconComponent = (elType) => {
  const el = synthesizeElement(elType, { class: 'icon' });
  return el;
};

// Create description component
const descriptionComponent = (elType, description) => {
  const el = synthesizeElement(elType, { class: 'icon' });
  el.textContent = description;
  return el;
};

// Create container component to store paired data/icon components
const containerComponent = (dataAttrName) => {
  const el = synthesizeElement('div', { class: dataAttrName });
  return el;
};

export {
  dataComponent, iconComponent, descriptionComponent, containerComponent,
};
