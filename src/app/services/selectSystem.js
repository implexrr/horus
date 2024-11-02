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

// Helper function for changeMeasurementSystem
function selectMeasurementSystem(oldSys, newSys) {
  document.querySelector(`button.${oldSys}`).classList.remove('system-selected');
  document.querySelector(`button.${newSys}`).classList.add('system-selected');
}

// Change measurement system, then display new data
function changeMeasurementSystem(newSys) {
  if (newSys === 'metric') {
    selectMeasurementSystem('imperial', newSys);
  } else {
    selectMeasurementSystem('metric', newSys);
  }
  displayData(newSys);
}

export { getCurrentSystem, changeMeasurementSystem };
