const API_KEY = 'BANRMLZEW5W39B5YGXZPZCZRQ';
const header = {
  mode: 'cors',
};

// Validate location input
function locationQueryValid(locationQuery) {
  const locationPattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9, .-]+$/;
  return locationPattern.test(locationQuery);
}

// Pull location data from input
function pullLocation(locationQuery) {
  const encodedLocation = encodeURIComponent(locationQuery);
  return encodedLocation;
}

function generateURL(locationQuery) {
  const location = pullLocation(locationQuery);
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

export default async function getRawData(locationQuery) {
  if (!locationQueryValid(locationQuery)) {
    console.log('invalid location query');
    return null;
  }
  const url = generateURL(locationQuery);
  try {
    const response = await fetch(url, header);
    if (!isValidResponse(response)) {
      return null;
    }
    const rawData = await response.json();
    return rawData;
  } catch (err) {
    console.error(err);
    return null;
  } finally {
    // clearForm();
  }
}
