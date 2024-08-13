import synthesizeElement from '../utils/synthesizeElement';

const dataComponent = (divOrSpan, metricMagnitude, metricUnit, imperialMagnitude, imperialUnit) => {
  const el = synthesizeElement(divOrSpan, {
    class: 'data',
    'data-metricmagnitude': metricMagnitude,
    'data-metricunit': metricUnit,
    'data-imperialmagnitude': imperialMagnitude,
    'data-imperialunit': imperialUnit,
  });
  return el;
};

const iconComponent = (divOrSpan) => {
  const el = synthesizeElement(divOrSpan, { class: 'icon' });
  return el;
};

const containerComponent = (dataAttr) => {
  const el = synthesizeElement('div', { class: dataAttr });
  return el;
};

export { dataComponent, iconComponent, containerComponent };
