const getFullStringDate = (date: Date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dayString = String(day).length === 1 ? `0${day}` : day;
  const mouthString = String(month).length === 1 ? `0${month}` : month;

  return `${dayString}.${mouthString}.${year}`;
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

const getStringDate = (values: { from: string | null; to: string | null }) => {
  const dates = getInitCalendarDates(values);

  if (dates === null) {
    return '';
  }

  const [from, to] = dates;

  const dayFrom = from.getDate();
  const monthFrom = from
    .toLocaleString('default', { month: 'short' })
    .substring(0, 3);

  const dayTo = to.getDate();
  const monthTo = to
    .toLocaleString('default', { month: 'short' })
    .substring(0, 3);

  return `${dayFrom} ${monthFrom} - ${dayTo} ${monthTo}`;
};

const getFirstInputValue = (
  values: { from: string | null; to: string | null },
  isSingle: boolean,
) => {
  if (values.from === null || values.to === null) {
    return '';
  }

  return isSingle ? `${getStringDate(values)}` : values.from;
};

export {
  getInitCalendarDates,
  getFullStringDate,
  getStringDate,
  getFirstInputValue,
};
