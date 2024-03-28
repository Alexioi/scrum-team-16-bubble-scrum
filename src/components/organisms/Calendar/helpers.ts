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

export { getFullStringDate, getStringDate };
