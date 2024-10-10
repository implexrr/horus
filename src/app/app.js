import homepage from './pages/homepage';
import { getCurrentSystem } from './services/selectSystem';

// Reload homepage according to user input
async function reloadHomepage(e) {
  e.preventDefault();
  const location = document.querySelector('#location').value;
  const measurementSystem = getCurrentSystem();
  await homepage(location, measurementSystem, false);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}

// Instantiate homepage according to default data
export default async function firstLoad(location, measurementSystem) {
  await homepage(location, measurementSystem, true);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}
