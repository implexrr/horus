// Read currently selected forecast
function getCurrentForecastType() {
  const forecastType = document.querySelector('.forecast-selected');
  if (forecastType.classList.contains('daily')) { return 'daily'; }
  return 'hourly';
}

// Display UI data based on chosen forecast type
function displayNewForecast(forecastType) {
  if (forecastType === 'hourly') {
    console.log('hourly');
    document.querySelector('#daily-container').classList.add('invisible');
  } else {
    console.log('daily');
    document.querySelector('#hourly-container').classList.add('invisible');
  }
  document.querySelector(`#${forecastType}-container`).classList.remove('invisible');
}

// Helper function for changeForecastType
function selectForecastType(oldForecast, newForecast) {
  document.querySelector(`button.${oldForecast}`).classList.remove('forecast-selected');
  document.querySelector(`button.${newForecast}`).classList.add('forecast-selected');
}

// Change measurement system, then display new data
function changeForecastType(newForecastType) {
  if (newForecastType === 'daily') {
    selectForecastType('hourly', newForecastType);
  } else {
    selectForecastType('daily', newForecastType);
  }
  displayNewForecast(newForecastType);
}

export { getCurrentForecastType, changeForecastType };
