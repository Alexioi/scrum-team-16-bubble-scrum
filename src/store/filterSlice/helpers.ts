const changeChecked = <T extends { checked: boolean; name: string }>(
  array: T[],
  name: string,
) => {
  return array.map((item) => {
    if (name === item.name) {
      return { ...item, checked: !item.checked };
    }

    return item;
  });
};

export { changeChecked };
