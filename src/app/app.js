import homepage from './pages/homepage';
import { getCurrentSystem } from './services/selectSystem';

function clearContent() {
  document.querySelector('body').textContent = '';
}

async function reloadHomepage(e) {
  e.preventDefault();
  const newData = document.querySelector('#location').value;
  const unitType = getCurrentSystem();
  clearContent();
  await homepage(newData, unitType);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}

export default async function initialLoad(data) {
  await homepage(data, 'metric');
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}
