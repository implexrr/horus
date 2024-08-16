import reloadHomepage from './pages/homepage';
import { getCurrentSystem } from './services/selectSystem';

// function clearContent() {
//   document.querySelector('body').textContent = '';
// }

async function initiateReload(e) {
  e.preventDefault();
  const newData = document.querySelector('#location').value;
  const unitType = getCurrentSystem();
  // clearContent();
  await reloadHomepage(newData, unitType, false);
  document.querySelector('#weather-form').addEventListener('submit', initiateReload);
}

export default async function initialLoad(data) {
  await reloadHomepage(data, 'metric', true);
  document.querySelector('#weather-form').addEventListener('submit', initiateReload);
}
