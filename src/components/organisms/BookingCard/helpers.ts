const calculateDays = (dates: { from: string | null; to: string | null }) => {
  if (dates.from === null || dates.to === null) {
    return 0;
  }

  const oneDay = 24 * 60 * 60 * 1000;

  const [firstDay, firstMonth, firstYear] = dates.from.split('.');
  const [secondDay, secondMonth, secondYear] = dates.to.split('.');

  const firstDate = new Date([firstMonth, firstDay, firstYear].join('.'));
  const secondDate = new Date([secondMonth, secondDay, secondYear].join('.'));

  const diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay),
  );

  return diffDays + 1;
};

export { calculateDays };
