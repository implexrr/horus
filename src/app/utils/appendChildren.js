export default function appendChildren(parent, ...children) {
  for (let childDex = 0; childDex < children.length; childDex += 1) {
    parent.appendChild(children[childDex]);
  }
}
