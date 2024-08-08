import synthesizeElement from '../../../utils/synthesizeElement';
import weatherFormEl from '../../forms/weatherForm';
import appendChildren from '../../../utils/appendChildren';
import { containerComponent, dataComponent, iconComponent } from '../../helperComponents';

const snapshotAttr = (divOrSpan, dataAttr, rawData) => {
  const attrContainerEl = containerComponent(dataAttr);
  const iconEl = iconComponent(divOrSpan);
  const dataEl = dataComponent(divOrSpan);
  dataEl.dataset.metric = rawData.currentConditions.icon;
  appendChildren(attrContainerEl, iconEl, dataEl);
  return attrContainerEl;
};

const snapshotEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'snapshot' }, rawData);
  const descriptionEl = snapshotAttr('div', 'description', rawData);
  const resolvedAddressEl = snapshotAttr('span', 'resolved-address', rawData);
  const timeEl = snapshotAttr('span', 'time', rawData);
  const temperatureEl = snapshotAttr('span', 'temp', rawData);
  appendChildren(el, descriptionEl, resolvedAddressEl, timeEl, temperatureEl, weatherFormEl());
  return el;
};

export default snapshotEl;
