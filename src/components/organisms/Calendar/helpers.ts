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

const getFirstInputValue = (
  values: { from: string | null; to: string | null },
  isSingle: boolean,
) => {
  if (values.from === null || values.to === null) {
    return '';
  }

  return isSingle ? `${values.from}-${values.to}` : values.from;
};

const getInitCalendarDates = (values: {
  from: string | null;
  to: string | null;
}): null | [Date, Date] => {
  if (values.from === null || values.to === null) {
    return null;
  }

  const [firstDay, firstMonth, firstYear] = values.from.split('.');
  const [secondDay, secondMonth, secondYear] = values.to.split('.');

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
