export default function displayData(unitType) {
  const elementsToFill = document.querySelectorAll('.data');
  if (unitType === 'metric') {
    console.log('loading metric data');
    for (let i = 0; i < elementsToFill.length; i += 1) {
      elementsToFill[i].textContent = elementsToFill[i].dataset.metric;
    }
  } else {
    console.log('loading imperial data');
    for (let i = 0; i < elementsToFill.length; i += 1) {
      elementsToFill[i].textContent = elementsToFill[i].dataset.metric;
    }
  }
}
