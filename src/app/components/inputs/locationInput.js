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
  el.pattern = '^(?=.*[a-zA-Z])[a-zA-Z0-9, .\\-]+$';

  // Add an event listener to show a custom error message
  el.addEventListener('invalid', () => {
    if (!el.validity.valid) {
      el.setCustomValidity('Please enter a valid location query');
    }
  });

  // Clear the custom error message once the input is valid again
  el.addEventListener('input', () => {
    el.setCustomValidity('');
  });

  return el;
};

export default locationInputEl;
