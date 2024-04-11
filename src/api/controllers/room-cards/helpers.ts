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

export { generateWhereFromCheckbox };
