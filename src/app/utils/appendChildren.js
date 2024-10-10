// Append all child elements to parent element
// First parameter = parent element, subsequent parameters = child elements.
export default function appendChildren(parent, ...children) {
  for (let childDex = 0; childDex < children.length; childDex += 1) {
    parent.appendChild(children[childDex]);
  }
}
