import synthesizeElement from '../../../utils/synthesizeElement';

const reloadButtonEl = () => {
  const el = synthesizeElement('button', { class: 'reload' });
  return el;
};

const reloadButtonContainer = () => {
  const el = synthesizeElement('div', { class: 'reload-container' });
  el.appendChild(reloadButtonEl());
  return el;
};

export default reloadButtonContainer;
