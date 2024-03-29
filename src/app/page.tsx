import { Checkbox, HelloToxin, ExpandableCheckboxList } from '@/components';

const listTitle = 'expandable checkbox list';
const checkboxItems = [
  {
    id: '1',
    name: 'breakfast',
    text: 'Завтрак',
    disabled: false,
  },
  {
    id: '2',
    name: 'desk',
    text: 'Письменный стол',
    disabled: false,
  },
  {
    id: '3',
    name: 'feeding-chair',
    text: 'Стул для кормления',
    disabled: false,
  },
  {
    id: '4',
    name: 'crib',
    text: 'Кроватка',
    disabled: false,
  },
  {
    id: '5',
    name: 'tv',
    text: 'Телевизор',
    disabled: false,
  },
  {
    id: '6',
    name: 'shampoo',
    text: 'Шампунь',
    disabled: false,
  },
];

const Home = () => {
  return (
    <>
      <HelloToxin />
      <Checkbox
        id="test-checkbox-1"
        name="test-checkbox-1"
        text="Широкий коридор"
        description="Ширина коридоров в номере не менее 91 см."
        disabled={false}
      />
      <Checkbox
        id="test-checkbox-2"
        name="test-checkbox-2"
        text="Широкий коридор"
        disabled={false}
      />
      <ExpandableCheckboxList
        listTitle={listTitle}
        checkboxItems={checkboxItems}
      />
      <ExpandableCheckboxList
        listTitle={listTitle}
        checkboxItems={checkboxItems}
      />
    </>
  );
};

export default Home;
