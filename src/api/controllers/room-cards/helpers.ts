import { Filters } from '@/store';
import { QueryFieldFilterConstraint, where } from 'firebase/firestore';

const generateWhereFromCheckbox = (
  fieldName: string,
  conditions: { name: string; checked: boolean }[],
) => {
  const whereArray: QueryFieldFilterConstraint[] = [];

  conditions.forEach((i) => {
    if (i.checked) {
      whereArray.push(where(`${fieldName}.${i.name}`, '==', i.checked));
    }
  });

  return whereArray;
};

const generateWhereFromDropdown = (
  fileds: string[],
  conditions: { counter: number }[],
  groups: number[][],
) => {
  return groups.map((i, idx) =>
    where(
      fileds[idx],
      '>=',
      i
        .map((subi) => conditions[subi].counter)
        .reduce((prev, current) => prev + current, 0),
    ),
  );
};

const generateFilters = (filters: Filters) => {
  return [
    where('price', '>=', filters.rangePrices[0]),
    where('price', '<=', filters.rangePrices[1]),
    ...generateWhereFromCheckbox('rules', filters.rulesList),
    ...generateWhereFromCheckbox('additionalAmenities', filters.expandableList),
    ...generateWhereFromCheckbox('availability', filters.availabilityList),
    ...generateWhereFromDropdown(
      ['guestCount', 'babyCount'],
      filters.guests.items,
      filters.guests.groups,
    ),
    ...generateWhereFromDropdown(
      ['bedRoomCount', 'bedCount', 'bathroomCount'],
      filters.rooms.items,
      filters.rooms.groups,
    ),
  ];
};

export { generateFilters };
