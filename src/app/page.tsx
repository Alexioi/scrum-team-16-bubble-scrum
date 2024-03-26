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
        <Input
          type="text"
          placeholder="ДД.ММ.ГГГГ"
          inputMode="numeric"
          // pattern="(0\d|1\d|2\d|30|31)\.(1[0-2]|0[1-9])\.(\d{4})"
        />
      </div>
    </>
  );
};

export default Home;
