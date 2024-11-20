import homepage from './pages/homepage';
import { getCurrentSystem } from './services/selectSystem';
import { getCurrentForecastType } from './services/selectForecastType';

// Reload homepage according to user input
async function reloadHomepage(e) {
  e.preventDefault();
  const location = document.querySelector('#location').value;
  const measurementSystem = getCurrentSystem();
  const forecastType = getCurrentForecastType();
  await homepage(location, measurementSystem, forecastType, false);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}

// Instantiate homepage according to default data
export default async function firstLoad(location, measurementSystem, forecastType) {
  await homepage(location, measurementSystem, forecastType, true);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}

export { reloadHomepage, firstLoad };
