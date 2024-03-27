const dateTemplate =
  /(((0[1-9]|[12]\d|3[01])\.(0[13578]|1[02])\.((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\.(0[13456789]|1[012])\.((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\.02\.((19|[2-9]\d)\d{2}))|(29\.02\.((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))/;

/**
 * Checks date validity
 * @param date format 'DD.MM.YYYY'
 * @returns true if date is a valid date, otherwise returns false
 */
const isDate = (date: string): boolean => {
  return dateTemplate.test(date);
};

const stringToDate = (date: string): Date => {
  const [day, month, year] = date.split('.').map((item) => Number(item));
  return new Date(year, month - 1, day);
};

const maxDate = (date1: string, date2: string): string => {
  if (stringToDate(date1) > stringToDate(date2)) {
    return date1;
  }
  return date2;
};

/**
 * Compares date with min value
 * @param date format 'DD.MM.YYYY'
 * @param min format 'DD.MM.YYYY'
 * @returns true if date is greater than minimal date, otherwise returns false
 */
const isDateGreaterOrEqual = (date: string, min: string): boolean => {
  if (maxDate(date, min) === date) {
    return true;
  }
  return false;
};

export { isDate, isDateGreaterOrEqual };
