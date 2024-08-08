import homepage from './pages/homepage';

function clearContent() {
  document.querySelector('body').textContent = '';
}

async function reloadHomepage(e) {
  e.preventDefault();
  const newData = document.querySelector('#location').value;
  let unitType = document.querySelector('.unit-selected');
  if (unitType.classList.contains('metric')) {
    unitType = 'metric';
  } else {
    unitType = 'imperial';
  }
  clearContent();
  await homepage(newData, unitType);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}

export default async function initialLoad(data) {
  await homepage(data, 'metric');
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}
