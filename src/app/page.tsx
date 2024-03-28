import {
  DropdownInput,
  HelloToxin,
  Input,
  SubscriptionInput,
} from '@/components';

const Home = () => {
  return (
    <>
      <HelloToxin />
      <div>
        <Input type="email" placeholder="Email" />
        <Input type="text" placeholder="Текст" value="This is pretty awesome" />
        <Input type="password" placeholder="Пароль" />
        <Input
          type="text"
          placeholder="Текст"
          value="This is pretty readonly"
          readOnly
        />
        <SubscriptionInput />
        <DropdownInput type="date" />
        <DropdownInput
          type="date"
          value="31.03.2024"
          placeholder="ДД.ММ.ГГГГ"
          readOnly
          squareBottom
        />
      </div>
    </>
  );
};

export default Home;
