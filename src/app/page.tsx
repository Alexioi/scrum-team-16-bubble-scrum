import { Checkbox, ExpandableCheckboxList, Hero } from '@/components';
import {
  checkboxItems,
  listTitle,
} from '@/components/organisms/ExpandableCheckboxList/data';

const Home = () => {
  return (
    <>
      <Hero />
      <Checkbox
        id="test-checkbox-1"
        name="test-checkbox-1"
        text="Широкий коридор"
        description="Ширина коридоров в номере не менее 91 см."
        checked
        disabled={false}
      />
      <Checkbox
        id="test-checkbox-2"
        name="test-checkbox-2"
        text="Широкий коридор"
        checked={false}
        disabled={false}
      />

      <ExpandableCheckboxList
        listTitle={listTitle}
        checkboxItems={checkboxItems}
      />
    </>
  );
};

export default Home;
