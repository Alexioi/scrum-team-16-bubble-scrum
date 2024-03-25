import { CustomCheckbox, HelloToxin } from '@/components';

const Home = () => {
  return (
    <>
      <HelloToxin />
      <CustomCheckbox
        id="custom-checkbox"
        name="custom-checkbox"
        text="test custom checkbox"
        isDisabled={false}
      />
    </>
  );
};

export default Home;
