const getObjectValuesSum = (object: Object) => {
  return Object.values(object).reduce((sum, item) => sum + item, 0);
};

export { getObjectValuesSum };
