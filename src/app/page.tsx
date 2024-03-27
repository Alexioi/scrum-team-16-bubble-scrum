import { Checkbox, HelloToxin } from '@/components';

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
    </>
  );
};

export default Home;
