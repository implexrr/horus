export default function changeUnits(unitType) {
  const elementsToFill = document.querySelectorAll('.data');
  if (unitType === 'metric') {
    console.log('loading metric data');
    for (let i = 0; i < elementsToFill.length; i += 1) {
      elementsToFill[i].textContent = elementsToFill[i].dataset.metric;
    }
    document.querySelector('button.metric').classList.add('unit-selected');
    document.querySelector('button.imperial').classList.remove('unit-selected');
  } else {
    console.log('loading imperial data');
    for (let i = 0; i < elementsToFill.length; i += 1) {
      elementsToFill[i].textContent = elementsToFill[i].dataset.metric;
    }
    document.querySelector('button.imperial').classList.add('unit-selected');
    document.querySelector('button.metric').classList.remove('unit-selected');
  }
}
