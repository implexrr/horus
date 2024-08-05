import synthesizeElement from '../../utils/synthesizeElement';

export default function locationInput() {
  const el = synthesizeElement('input', {
    type: 'text',
    id: 'location',
    name: 'location',
    placeholder: 'Search Location',
  });
  el.required = true;
  return el;
}
