import './main.css';

// Select key elements
const API_KEY = 'BANRMLZEW5W39B5YGXZPZCZRQ';
const weatherFormEl = document.querySelector('#weather-form');
const lengthOfWeek = 7;
const lengthOfDay = 24;
const header = {
  mode: 'cors',
};

// cond'ns to log
const requiredCurrentInfo = [
  'conditions', 'datetime', 'feelslike', 'humidity',
  'icon', 'precip', 'precipprob', 'preciptype',
  'sunrise', 'sunset', 'temp', 'visibility',
  'winddir', 'windspeed',
];

const requiredDailyInfo = ['conditions', 'icon', 'datetime', 'temp'];

const requiredHourlyInfo = ['conditions', 'icon', 'temp'];

const requiredLocationInfo = ['resolvedAddress'];

// Clear input form
function clearForm() {
  const weatherFormInputEls = document.querySelectorAll('form input');
  for (let i = 0; i < weatherFormInputEls.length; i += 1) {
    weatherFormInputEls[i].value = '';
  }
}

// Validate location input
function locationQueryValid() {
  const locationInputValue = document.querySelector('#location').value;
  const locationPattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9, .-]+$/;
  return locationPattern.test(locationInputValue);
}

// Validate form input
function validForm() {
  const isValidLocation = locationQueryValid();
  if (isValidLocation) {
    return true;
  }
  clearForm();
  return false;
}

// Pull location data from input
function pullLocation() {
  const locationInputValue = document.querySelector('#location').value;
  const encodedLocation = encodeURIComponent(locationInputValue);
  return encodedLocation;
}

// Generate URL to send to server
function generateURL() {
  const location = pullLocation();
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${API_KEY}`;
  return url;
}

// Check server response
function isValidResponse(response) {
  if (response.ok) { return true; }
  if (response.status === 400) {
    console.log('Sorry, we couldn\'t find that location');
  } else {
    console.log(`Unexpected server response: ${response.status}`);
  }
  return false;
}

// Snapshot of current conditions
function logCurrentConditions(currentConditions) {
  console.log('logging snapshot of current conditions');
  for (let i = 0; i < requiredCurrentInfo.length; i += 1) {
    console.log(`${requiredCurrentInfo[i]}: ${currentConditions[requiredCurrentInfo[i]]}`);
  }
}

// Snapshot of next 7 days
function logWeeklyForecast(weeklyData) {
  console.log('logging next 7 days');
  for (let day = 0; day < lengthOfWeek; day += 1) {
    console.log(`Forecast for day ${day}: `);
    for (let i = 0; i < requiredDailyInfo.length; i += 1) {
      console.log(`${requiredDailyInfo[i]} : ${weeklyData[day][requiredDailyInfo[i]]}`);
    }
  }
}

// Snapshot of next 24 hours
function logHourlyForecast(hourlyData) {
  console.log('logging next 24 hours');
  for (let hour = 0; hour < lengthOfDay; hour += 1) {
    console.log(`Forecast for hour ${hour}:`);
    for (let i = 0; i < requiredHourlyInfo.length; i += 1) {
      console.log(`${requiredHourlyInfo[i]} : ${hourlyData[requiredHourlyInfo[i]]}`);
    }
  }
}

// Snapshot of location details
function logCurrentAddress(rawData) {
  console.log('logging location details: ');
  for (let i = 0; i < requiredLocationInfo.length; i += 1) {
    console.log(`${requiredLocationInfo[i]}: ${rawData[requiredLocationInfo[i]]}`);
  }
}

function logCurrentSnapshot(rawData) {
  console.log('logging snapshot of current data: ');
  logCurrentAddress(rawData);
  // console.log(rawData.description);
  logCurrentConditions(rawData.currentConditions);
  logWeeklyForecast(rawData.days);
  logHourlyForecast(rawData.days[0]);
}

// Get weather from server
async function getWeather(e) {
  e.preventDefault();
  if (!validForm()) {
    console.log('invalid form');
    return;
  }
  const url = generateURL();
  try {
    const response = await fetch(url, header);
    if (!isValidResponse(response)) { return; }
    console.log(response);
    const rawData = await response.json();
    console.log(rawData);
    logCurrentSnapshot(rawData);
  } catch (err) {
    console.error(err);
  } finally {
    clearForm();
  }
}

weatherFormEl.addEventListener('submit', getWeather);
