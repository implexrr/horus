import synthesizeElement from '../utils/synthesizeElement';

const dataComponent = (divOrSpan) => {
  const el = synthesizeElement(divOrSpan, { class: 'data', 'data-metric': '', 'data-imperial': '' });
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
