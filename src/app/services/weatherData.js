const API_KEY = 'BANRMLZEW5W39B5YGXZPZCZRQ'; // TODO: Obviously not safe to do it like this, please change ASAP
const header = {
  mode: 'cors',
};

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
function checkServerResponse(response) {
  if (response.ok) { return 'response ok'; }
  if (response.status === 400) {
    return 'location not found';
  }
  console.log(`Unexpected server response: ${response.status}`);
  return 'bad server response';
}

// Pull raw weather JSON data from API based on location query
export default async function getRawData(locationQuery) {
  const url = generateURL(locationQuery);

  // Try fetching & converting raw data from weather API
  try {
    const response = await fetch(url, header);
    if (checkServerResponse(response) !== 'response ok') {
      return checkServerResponse(response);
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
