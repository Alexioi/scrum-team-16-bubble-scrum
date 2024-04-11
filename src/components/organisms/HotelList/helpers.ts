const generateObjectFromDropdown = (
  fileds: string[],
  conditions: { counter: number }[],
  groups: number[][],
) => {
  const obj: Record<string, number> = {};

  groups.forEach((i, idx) => {
    obj[fileds[idx]] = i
      .map((subi) => conditions[subi].counter)
      .reduce((prev, current) => prev + current, 0);
  });

  return obj;
};

export { generateObjectFromDropdown };
