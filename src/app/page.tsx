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
        <Input type="date" min="2024-03-20" />
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
        <Input type="date" id="dateInput" expanded />
      </div>
    </>
  );
};

export default Home;
