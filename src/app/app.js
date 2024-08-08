import homepage from './pages/homepage';

function clearContent() {
  document.querySelector('body').textContent = '';
}

async function reloadHomepage(e) {
  e.preventDefault();
  const newData = document.querySelector('#location').value;
  clearContent();
  await homepage(newData);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}

export default async function initialLoad(data) {
  await homepage(data);
  document.querySelector('#weather-form').addEventListener('submit', reloadHomepage);
}
