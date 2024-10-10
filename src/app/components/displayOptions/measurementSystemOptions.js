import synthesizeElement from '../../utils/synthesizeElement';
import appendChildren from '../../utils/appendChildren';
import { imperialButtonEl, metricButtonEl } from './buttons/unitButtons';

// Create component that lets users choose desired measurement system (imperial/metric)
const measurementSystemOptionsEl = () => {
  const el = synthesizeElement('div', { id: 'measurement-system-options' });
  appendChildren(el, imperialButtonEl(), document.createTextNode(' | '), metricButtonEl());
  return el;
};

export default measurementSystemOptionsEl;
