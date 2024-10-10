const API_KEY = 'BANRMLZEW5W39B5YGXZPZCZRQ'; // TODO: Obviously not safe to do it like this, please change ASAP
const header = {
  mode: 'cors',
};

// Syntactically validate location input
function locationQueryValid(locationQuery) {
  const locationPattern = /^(?=.*[a-zA-Z])[a-zA-Z0-9, .-]+$/;
  return locationPattern.test(locationQuery);
}

// Generate URI encoded location query
function generateEncodedLocation(locationQuery) {
  const encodedLocation = encodeURIComponent(locationQuery);
  return encodedLocation;
}

// Generate URL to send to API, given location query
function generateURL(locationQuery) {
  const location = generateEncodedLocation(locationQuery);
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?iconSet=icons2&unitGroup=metric&key=${API_KEY}`;
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

// Pull raw weather JSON data from API based on location query
export default async function getRawData(locationQuery) {
  // Generate URL to send to server if location query is syntactically valid
  if (!locationQueryValid(locationQuery)) {
    console.log('invalid location query');
    return null;
  }
  const url = generateURL(locationQuery);

  // Try fetching & converting raw data from weather API
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
    // TODO: doSomething, not sure what yet
  }
}
