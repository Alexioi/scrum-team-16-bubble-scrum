import { HelloToxin, Input } from '@/components';

const Home = () => {
  return (
    <>
      <HelloToxin />
      <div>
        <h2>Date:</h2>
        <Input type="date" min="2024-03-20" />
        <h2>Email:</h2>
        <Input type="email" placeholder="Email" />
        <h2>Text:</h2>
        <Input type="text" placeholder="Текст" value="This is pretty awesome" />
        <h2>Password:</h2>
        <Input type="password" placeholder="Пароль" />
      </div>
    </>
  );
};

export default Home;
