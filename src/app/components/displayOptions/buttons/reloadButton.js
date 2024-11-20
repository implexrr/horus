import synthesizeElement from '../../../utils/synthesizeElement';

const ROTATION_SPEED = 250;

function rotateReloadButton() {
  const reloadEl = document.querySelector('.reload');
  reloadEl.classList.add('rotate');
  setTimeout(() => {
    reloadEl.classList.remove('rotate');
  }, ROTATION_SPEED);
}

function reloadData() {
  rotateReloadButton();

  // Manually add search query and submit
  const currentLocation = document.querySelector('.resolvedAddress').textContent;
  document.querySelector('#search-box input').style.color = 'white';
  document.querySelector('#search-box input').value = currentLocation;
  document.querySelector('#weather-form').requestSubmit();
}

const reloadButtonEl = () => {
  const el = synthesizeElement('button', { class: 'reload' });
  el.addEventListener('click', reloadData);
  return el;
};

const reloadButtonContainer = () => {
  const el = synthesizeElement('div', { class: 'reload-container' });
  el.appendChild(reloadButtonEl());
  return el;
};

export default reloadButtonContainer;
