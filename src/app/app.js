import homepage from './pages/homepage';

function clearContent() {
  document.querySelector('body').textContent = '';
}

async function handleSubmission(e) {
  e.preventDefault();
  const newData = document.querySelector('#location').value;
  clearContent();
  await homepage(newData);
  document.querySelector('#weather-form').addEventListener('submit', handleSubmission);
}

export default async function initialLoad(data) {
  await homepage(data);
  document.querySelector('#weather-form').addEventListener('submit', handleSubmission);
}
