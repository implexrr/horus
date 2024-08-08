import synthesizeElement from '../../../utils/synthesizeElement';
import weatherFormEl from '../../forms/weatherForm';
import appendChildren from '../../../utils/appendChildren';
import { containerComponent, dataComponent, iconComponent } from '../../helperComponents';

const snapshotAttr = (divOrSpan, dataAttr) => {
  const attrContainerEl = containerComponent(dataAttr);
  const iconEl = iconComponent(divOrSpan);
  const dataEl = dataComponent(divOrSpan);
  appendChildren(attrContainerEl, iconEl, dataEl);
  return attrContainerEl;
};

const snapshotEl = () => {
  const el = synthesizeElement('div', { id: 'snapshot' });
  const descriptionEl = snapshotAttr('div', 'description');
  const resolvedAddressEl = snapshotAttr('span', 'resolved-address');
  const timeEl = snapshotAttr('span', 'time');
  const temperatureEl = snapshotAttr('span', 'temp');
  appendChildren(el, descriptionEl, resolvedAddressEl, timeEl, temperatureEl, weatherFormEl());
  return el;
};

export default snapshotEl;
