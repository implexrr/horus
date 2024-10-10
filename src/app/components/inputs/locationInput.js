import synthesizeElement from '../../utils/synthesizeElement';

// Create component that reads location queries from users
const locationInputEl = () => {
  const el = synthesizeElement('input', {
    type: 'text',
    id: 'location',
    name: 'location',
    placeholder: 'Search Location',
  });
  el.required = true;
  return el;
};

export default locationInputEl;
