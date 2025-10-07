export default function randomIndexOfArray<T>(arr: Array<T>) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % arr.length;
}
