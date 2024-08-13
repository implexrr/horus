function getCurrentSystem() {
  const unitType = document.querySelector('.unit-selected');
  if (unitType.classList.contains('metric')) {
    return 'metric';
  } return 'imperial';
}

function displayData(unitType) {
  const elementsToFill = document.querySelectorAll('.data');
  for (let i = 0; i < elementsToFill.length; i += 1) {
    const magnitude = `${unitType}magnitude`;
    const unit = `${unitType}unit`;
    elementsToFill[i].textContent = `${elementsToFill[i].dataset[magnitude]}${elementsToFill[i].dataset[unit]}`;
  }
}

function selectUnitSystem(oldSys, newSys) {
  document.querySelector(`button.${oldSys}`).classList.remove('unit-selected');
  document.querySelector(`button.${newSys}`).classList.add('unit-selected');
}

export default function changeSystem(unitType) {
  if (unitType === 'metric') {
    selectUnitSystem('imperial', unitType);
  } else {
    selectUnitSystem('metric', unitType);
  }
  displayData(unitType);
}

export { getCurrentSystem, changeSystem };
