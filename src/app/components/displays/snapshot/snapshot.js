import synthesizeElement from '../../../utils/synthesizeElement';
import weatherFormEl from '../../forms/weatherForm';
import appendChildren from '../../../utils/appendChildren';
import { containerComponent, dataComponent, iconComponent } from '../../helperComponents';

const snapshotAttr = (divOrSpan, dataAttrDescr, data, metricDataAttr, imperialDataAttr) => {
  const attrContainerEl = containerComponent(dataAttrDescr);
  const iconEl = iconComponent(divOrSpan);
  const dataEl = dataComponent(divOrSpan);
  dataEl.dataset.metric = data[metricDataAttr];
  dataEl.dataset.imperial = data[imperialDataAttr];
  if (dataAttrDescr === 'temp') {
    dataEl.dataset.imperial = ((data[metricDataAttr] * 1.8) + 32).toFixed(1);
  }
  appendChildren(attrContainerEl, iconEl, dataEl);
  return attrContainerEl;
};

const snapshotEl = (rawData) => {
  const snapshotData = rawData.currentConditions;

  const el = synthesizeElement('div', { id: 'snapshot' });
  const descriptionEl = snapshotAttr('div', 'description', snapshotData, 'icon', 'icon');
  const resolvedAddressEl = snapshotAttr('span', 'resolved-address', rawData, 'resolvedAddress', 'resolvedAddress');
  const timeEl = snapshotAttr('span', 'time', snapshotData, 'datetime', 'datetime');
  const temperatureEl = snapshotAttr('span', 'temp', snapshotData, 'temp', 'temp');
  appendChildren(el, descriptionEl, resolvedAddressEl, timeEl, temperatureEl, weatherFormEl());
  return el;
};

export default snapshotEl;
