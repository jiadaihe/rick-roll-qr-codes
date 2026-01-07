export function selectRandom<T>(list: Array<T>) {
  return list[Math.floor(Math.random() * list.length)];
}
