import synthesizeElement from '../../../utils/synthesizeElement';
import { dataComponent, descriptionComponent, containerComponent } from '../../helperComponents';

// Create helper fxn(s)

// Create component for sunrise description/data

// Create component for sunset description/data

// Create component for humidity description/data

// Create component for visibility description/data

// Create component for winddir description/data

// Create component for windspeed description/data

// Create component for precip description/data

// Create component for precipprob description/data

// Create component for preciptype description/data

// Create current conditions card component
const currentConditionsEl = (rawData) => {
  const el = synthesizeElement('div', { id: 'current-conditions' });
  return el;
};

export default currentConditionsEl;
/*
<div class="sunrise">
  <span class="icon">XX_XX </span>
  <span class="title">sunrise:</span>
  <span class="data">06:09</span>
</div>
<div class="sunset">
  <span class="icon">XX_XX</span>
  <span class="title">sunset:</span>
  <span class="data">20:41</span>
</div>
<div class="humidity">
  <span class="icon">XX_XX</span>
  <span class="title">humidity</span>
  <span class="data">14%</span>
</div>
<div class="visibility">
  <span class="icon">XX_XX</span>
  <span class="title">visibility</span>
  <span class="data switchable" data-metric="24km" data-imperial="14.9mi"></span>
</div>
<div class="winddir">
  <span class="icon">XX_XX</span>
  <span class="title">wind direction:</span>
  <span class="data">NNW</span>
</div>
<div class="windspeed">
  <span class="icon">XX_XX</span>
  <span class="title">wind speed:</span>
  <span class="data switchable" data-metric="12kph" data-imperial="7.5mph"></span>
</div>
<div class="precip">
  <span class="icon">XX_XX</span>
  <span class="title">precipitation:</span>
  <span class="data switchable" data-metric="15mm" data-imperial="0.6in"></span>
</div>
<div class="precipprob">
  <span class="icon">XX_XX</span>
  <span class="title">precipitation probability:</span>
  <span class="data">40%</span>
</div>
<div class="preciptype">
  <span class="icon">XX_XX</span>
  <span class="title">precipitation type:</span>
  <span class="data">rain</span>
</div>
*/
