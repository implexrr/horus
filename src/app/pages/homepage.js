import createTopEl from '../components/top';
import createBottomEl from '../components/bottom';

export default function generateHomePage() {
  const topEl = createTopEl();
  const bottomEl = createBottomEl();
  const toAppend = [topEl, bottomEl];
  const bodyEl = document.querySelector('body');

  for (let i = 0; i < toAppend.length; i += 1) {
    bodyEl.appendChild(toAppend[i]);
  }
}
