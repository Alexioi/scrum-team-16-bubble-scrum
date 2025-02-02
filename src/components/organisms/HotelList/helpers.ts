const generateObjectFromDropdown = (
  fileds: string[],
  conditions: { counter: number }[],
  groups: number[][],
) => {
  const obj: Record<string, number> = {};

  groups.forEach((item, i) => {
    obj[fileds[i]] = item
      .map((subItem) => conditions[subItem].counter)
      .reduce((prev, current) => prev + current, 0);
  });

  return obj;
};

const generateDateFromString = (stringData: string, isFilterDate: boolean) => {
  const [first, second, third] = stringData.split('.');
  return isFilterDate
    ? new Date(Number(third), Number(second) - 1, Number(first))
    : new Date(Number(first), Number(second) - 1, Number(third));
};

export { generateObjectFromDropdown, generateDateFromString };
