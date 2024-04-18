const getDeclension = (num: number, one: string, two: string, five: string) => {
  let n = Math.abs(num);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return `${num} ${five} назад`;
  }
  n %= 10;
  if (n === 1) {
    return `${num} ${one} назад`;
  }
  if (n >= 2 && n <= 4) {
    return `${num} ${two} назад`;
  }
  return `${num} ${five} назад`;
};

export { getDeclension };
