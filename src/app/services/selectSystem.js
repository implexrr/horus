// Read currently selected system
function getCurrentSystem() {
  const measurementSystem = document.querySelector('.system-selected');
  if (measurementSystem.classList.contains('metric')) {
    return 'metric';
  } return 'imperial';
}

// Display UI data based on some measurement system
function displayData(measurementSystem) {
  const elementsToFill = document.querySelectorAll('.data');
  for (let i = 0; i < elementsToFill.length; i += 1) {
    const magnitude = `${measurementSystem}magnitude`;
    const unit = `${measurementSystem}unit`;
    elementsToFill[i].textContent = `${elementsToFill[i].dataset[magnitude]}${elementsToFill[i].dataset[unit]}`;
  }
}

// Helper function for changeSystem
function selectMeasurementSystem(oldSys, newSys) {
  document.querySelector(`button.${oldSys}`).classList.remove('system-selected');
  document.querySelector(`button.${newSys}`).classList.add('system-selected');
}

// Change measurement system, then display new data
function changeSystem(measurementSystem) {
  if (measurementSystem === 'metric') {
    selectMeasurementSystem('imperial', measurementSystem);
  } else {
    selectMeasurementSystem('metric', measurementSystem);
  }
  displayData(measurementSystem);
}

export { getCurrentSystem, changeSystem };
