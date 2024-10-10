// Quick function for modular arithmetic since JS doesn't handle mod arithmetic as desired
export default function mod(num, m) {
  return ((num % m) + m) % m;
}
