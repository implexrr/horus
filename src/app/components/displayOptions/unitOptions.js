import synthesizeElement from '../../utils/synthesizeElement';
import appendChildren from '../../utils/appendChildren';
import { imperialButtonEl, metricButtonEl } from '../buttons/unitButtons';

const unitOptionsEl = () => {
  const el = synthesizeElement('div', { id: 'unit-options' });
  appendChildren(el, imperialButtonEl(), document.createTextNode(' | '), metricButtonEl());
  return el;
};

export default unitOptionsEl;
