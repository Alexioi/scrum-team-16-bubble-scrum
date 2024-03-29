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
        <Input
          type="text"
          placeholder="Текст"
          defaultValue="This is pretty awesome"
        />
        <Input type="password" placeholder="Пароль" active />
        <Input type="text" defaultValue="This is pretty readonly" readOnly />
        <SubscriptionInput />
        <DropdownInput type="text" />
        <DropdownInput type="text" expanded />
        <DropdownInput
          type="text"
          defaultValue="31.03.2024"
          placeholder="ДД.ММ.ГГГГ"
          readOnly
          squareBottom
        />
      </div>
    </>
  );
};

export default Home;
