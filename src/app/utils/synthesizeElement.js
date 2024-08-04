function setAttributes(element, attributes) {
  const keys = Object.keys(attributes);
  for (let keyDex = 0; keyDex < keys.length; keyDex += 1) {
    const key = keys[keyDex];
    element.setAttribute(key, attributes[key]);
  }
}

export default function synthesizeElement(element, attributes) {
  const el = document.createElement(element);
  setAttributes(el, attributes);
  return el;
}
