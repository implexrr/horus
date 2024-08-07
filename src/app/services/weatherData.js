export default function fakefxn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const a = 123;
      resolve(a); // Resolve the promise with the value `a`
    }, 2000);
  });
}
