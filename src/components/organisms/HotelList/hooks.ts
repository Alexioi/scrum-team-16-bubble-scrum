import { useMemo } from 'react';

import { Filters } from '@/store';

import { Hotel } from '../HotelCard';
import { generateObjectFromDropdown } from './helpers';

const checkPrice = (start: number, end: number, hotelPrice: number) =>
  hotelPrice >= start && hotelPrice <= end;

const checkDropDownValues = (
  filters: Record<string, number>,
  hotel: Record<string, number>,
) => {
  let flag = true;

  Object.keys(filters).forEach((k) => {
    flag = flag && k in hotel && filters[k] <= hotel[k];
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
        checkPrice(filters.rangePrices[0], filters.rangePrices[1], i.price),
    );
  }, [filters, data]);
};

export { useFilter };
