const calculateDays = (dates: string[]) => {
  const oneDay = 24 * 60 * 60 * 1000;

  const [firstDay, firstMonth, firstYear] = dates[0].split('.');
  const [secondDay, secondMonth, secondYear] = dates[1].split('.');

  const firstDate = new Date([firstMonth, firstDay, firstYear].join('.'));
  const secondDate = new Date([secondMonth, secondDay, secondYear].join('.'));

  const diffDays = Math.round(
    Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay),
  );

  return diffDays + 1;
};

export { calculateDays };
