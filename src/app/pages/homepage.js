import synthesizeElement from '../utils/synthesizeElement';
import currentConditionsContainerEl from '../components/containers/currentConditionsContainer';
import forecastContainerEl from '../components/containers/forecastContainer';
import snapshotContainerEl from '../components/containers/snapshotContainer';
import unitOptionsEl from '../components/displayOptions/unitOptions';
import forecastOptionsEl from '../components/displayOptions/forecastOptions';
import appendChildren from '../utils/appendChildren';

function topEl() {
  const el = synthesizeElement('div', { id: 'top' });
  appendChildren(el, unitOptionsEl(), snapshotContainerEl(), currentConditionsContainerEl());
  return el;
}

function bottomEl() {
  const el = synthesizeElement('div', { id: 'bottom' });
  appendChildren(el, forecastOptionsEl(), forecastContainerEl());
  return el;
}

export default function generateHomePage() {
  const bodyEl = document.querySelector('body');
  appendChildren(bodyEl, topEl(), bottomEl());
}
