export function selectRandom<T>(list: Array<T>) {
  return list[Math.floor(Math.random() * list.length)];
}

export const ROOM_CODE_LETTERS = "abcdefghijkmnopqrstuvwxyz";

export const classes = (...classnames: (string | null | false | undefined)[]) =>
  classnames.filter(Boolean).join(" ");
