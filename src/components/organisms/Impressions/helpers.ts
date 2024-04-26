const getTitleByName = (name: string) => {
  switch (name) {
    case 'great':
      return 'Великолепно';
    case 'good':
      return 'Хорошо';
    case 'satisfactorily':
      return 'Удовлетворительно';
    case 'bad':
      return 'Разочарован';
    default:
      return name;
  }
};

export { getTitleByName };
