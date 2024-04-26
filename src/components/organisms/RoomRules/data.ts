const title = 'Правила';

const rules: {
  data: string;
  trigger: 'isAnimals' | 'isLotOfGuests' | 'isSmoke' | null;
}[] = [
  { data: 'Нельзя с питомцами', trigger: 'isAnimals' },
  { data: 'Без вечеринок и мероприятий', trigger: 'isLotOfGuests' },
  {
    data: 'Нельзя курить',
    trigger: 'isSmoke',
  },
  {
    data: 'Время прибытия — после 13:00, а выезд до 12:00',
    trigger: null,
  },
];

export { rules, title };
