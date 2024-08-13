import synthesizeElement from '../../../utils/synthesizeElement';
import weatherFormEl from '../../forms/weatherForm';
import appendChildren from '../../../utils/appendChildren';
import { containerComponent, dataComponent, iconComponent } from '../../helperComponents';

const snapshotAttr = (
  divOrSpan,
  dataAttr,
  metricMagnitude,
  metricUnit,
  imperialMagnitude,
  imperialUnit,
) => {
  const attrContainerEl = containerComponent(dataAttr);
  const iconEl = iconComponent(divOrSpan);
  const dataEl = dataComponent(
    divOrSpan,
    metricMagnitude,
    metricUnit,
    imperialMagnitude,
    imperialUnit,
  );
  appendChildren(attrContainerEl, iconEl, dataEl);
  return attrContainerEl;
};

const snapshotEl = (rawData) => {
  const snapshotData = rawData.currentConditions;
  const metricTemp = snapshotData.temp;
  const imperialTemp = ((metricTemp * 1.8) + 32).toFixed(1);
  const el = synthesizeElement('div', { id: 'snapshot' });
  const conditionsEl = snapshotAttr('div', 'conditions', snapshotData.conditions, '', snapshotData.conditions, '');
  const resolvedAddressEl = snapshotAttr('div', 'resolvedAddress', rawData.resolvedAddress, '', rawData.resolvedAddress, '');
  const datetimeEl = snapshotAttr('div', 'datetime', snapshotData.datetime, '', snapshotData.datetime, '');
  const tempEl = snapshotAttr('div', 'temp', metricTemp, ' °C', imperialTemp, ' °F');
  appendChildren(el, conditionsEl, resolvedAddressEl, datetimeEl, tempEl, weatherFormEl());
  return el;
};

export default snapshotEl;
