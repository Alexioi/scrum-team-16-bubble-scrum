const getFullStringDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dayString = String(day).length === 1 ? `0${day}` : day;
  const mouthString = String(month).length === 1 ? `0${month}` : month;

  return `${dayString}.${mouthString}.${year}`;
};

const getStringDate = (date: Date) => {
  const day = date.getDate();
  const month = date
    .toLocaleString('default', { month: 'short' })
    .substring(0, 3);

  return `${day} ${month}`;
};

const getFirstInputValue = (values: string[] | null[], isSingle: boolean) => {
  if (values[0] === null || values[1] === null) {
    return '';
  }

  return isSingle ? `${values[0]}-${values[1]}` : values[0];
};

const getInitCalendarDates = (
  values: string[] | null[],
): null | [Date, Date] => {
  if (values[0] === null || values[1] === null) {
    return null;
  }

  const [firstDay, firstMonth, firstYear] = values[0].split('.');
  const [secondDay, secondMonth, secondYear] = values[1].split('.');

  return [
    new Date([firstMonth, firstDay, firstYear].join('.')),
    new Date([secondMonth, secondDay, secondYear].join('.')),
  ];
};

export {
  getFullStringDate,
  getStringDate,
  getFirstInputValue,
  getInitCalendarDates,
};
