import synthesizeElement from '../utils/synthesizeElement';
import currentConditionsContainerEl from '../components/containers/currentConditionsContainer';
import forecastContainerEl from '../components/containers/forecastContainer';
import snapshotContainerEl from '../components/containers/snapshotContainer';
import unitOptionsEl from '../components/displayOptions/unitOptions';
import forecastOptionsEl from '../components/displayOptions/forecastOptions';
import appendChildren from '../utils/appendChildren';

function topEl() {
  const e = synthesizeElement('div', { id: 'top' });
  appendChildren(e, unitOptionsEl(), snapshotContainerEl(), currentConditionsContainerEl());
  return e;
}

function bottomEl() {
  const e = synthesizeElement('div', { id: 'bottom' });
  appendChildren(e, forecastOptionsEl(), forecastContainerEl());
  return e;
}

export default function generateHomePage() {
  const bodyEl = document.querySelector('body');
  appendChildren(bodyEl, topEl(), bottomEl());
}
