const makeMaskedPhone = (value: string) => {
  const numbers = value.replace(/\D/g, '');

  if (numbers.length === 0) {
    return '';
  }

  if (numbers.length === 1) {
    return `+${numbers.slice(0, 1)}`;
  }

  if (numbers.length <= 4) {
    return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}`;
  }

  if (numbers.length <= 7) {
    return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}`;
  }

  if (numbers.length <= 9) {
    return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}`;
  }

  return `+${numbers.slice(0, 1)} (${numbers.slice(1, 4)}) ${numbers.slice(4, 7)}-${numbers.slice(7, 9)}-${numbers.slice(9, 11)}`;
};

const calculateDay = (day: string): string => {
  if (day.length === 2) {
    if (Number(day) > 31) {
      return '31';
    }

    if (day === '00') {
      return '0';
    }

    return day;
  }

  if (Number(day) > 3) {
    return `0${day}`;
  }

  return day;
};

const calculateMonth = (month: string): string => {
  if (month.length === 2) {
    if (Number(month) > 12) {
      return '12';
    }

    if (month === '00') {
      return '0';
    }

    return month;
  }

  if (Number(month) > 1) {
    return `0${month}`;
  }

  return month;
};

const isDateValid = (day: string, month: string, year: string): boolean => {
  const date = `${year},${month},${day}`;

  const currentDate = new Date(date);

  const isDayValid = Number(day) === currentDate.getDate();
  const isMonthValid = Number(month) === currentDate.getMonth() + 1;
  const isYearValid = Number(year) === currentDate.getFullYear();

  return isYearValid && isMonthValid && isDayValid;
};

const calculateYear = (day: string, month: string, year: string) => {
  if (!isDateValid(day, month, year)) {
    return year.slice(0, 3);
  }

  return year;
};

const makeMaskedDate = (value: string) => {
  const numbers = value.replace(/\D/g, '');
  const day = calculateDay(numbers.slice(0, 2));
  const month = calculateMonth(numbers.slice(2, 4));
  const year = calculateYear(day, month, numbers.slice(4, 8));

  if (numbers.length <= 2) {
    return day;
  }

  if (numbers.length <= 4) {
    return `${day}.${month}`;
  }

  return `${day}.${month}.${year}`;
};

export { makeMaskedPhone, makeMaskedDate };
