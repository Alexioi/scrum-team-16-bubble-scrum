import { useMemo } from 'react';

import { Filters } from '@/store';

import { Hotel } from '../HotelCard';
import { generateDateFromString, generateObjectFromDropdown } from './helpers';

const checkPrice = (start: number, end: number, hotelPrice: number) =>
  hotelPrice >= start && hotelPrice <= end;

const checkDropDownValues = (
  filters: Record<string, number>,
  hotel: Record<string, number>,
) => {
  let flag = true;

  Object.keys(filters).forEach((item) => {
    flag = flag && item in hotel && filters[item] <= hotel[item];
  });

  return flag;
};

const checkCheckbox = (
  filters: { name: string; checked: boolean }[],
  hotel: Record<string, boolean>,
) => {
  let flag = true;

  filters.forEach((i) => {
    if (i.checked) flag = flag && i.name in hotel && hotel[i.name] === true;
  });

  return flag;
};

const checkDate = (
  filter: string[] | null[],
  hotelStart: string,
  hotelEnd: string,
) => {
  if (filter[0] === null || filter[1] === null) return true;
  const filterStartDate = generateDateFromString(filter[0], true);
  const filterEndDate = generateDateFromString(filter[1], true);
  const hotelStartDate = generateDateFromString(hotelStart, false);
  const hotelEndDate = generateDateFromString(hotelEnd, false);

  return filterStartDate >= hotelStartDate && filterEndDate <= hotelEndDate;
};

const useFilter = (filters: Filters, data: Hotel[]) => {
  return useMemo(() => {
    const guestsFilters = generateObjectFromDropdown(
      ['guestCount', 'babyCount'],
      filters.guests.items,
      filters.guests.groups,
    );

    const roomFilters = generateObjectFromDropdown(
      ['bedRoomCount', 'bedCount', 'bathroomCount'],
      filters.rooms.items,
      filters.rooms.groups,
    );

    return data.filter(
      (i) =>
        checkDropDownValues(guestsFilters, {
          guestCount: i.guestCount,
          babyCount: i.babyCount,
        }) &&
        checkDropDownValues(roomFilters, {
          bedRoomCount: i.bedRoomCount,
          bedCount: i.bedCount,
          bathroomCount: i.bathroomCount,
        }) &&
        checkCheckbox(filters.rulesList, i.rules) &&
        checkCheckbox(filters.expandableList, i.additionalAmenities) &&
        checkCheckbox(filters.availabilityList, i.availability) &&
        checkDate(filters.dates, i.startDate, i.endDate) &&
        checkPrice(filters.rangePrices[0], filters.rangePrices[1], i.price),
    );
  }, [filters, data]);
};

export { useFilter };
