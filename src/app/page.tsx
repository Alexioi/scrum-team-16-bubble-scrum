'use client';

import { HelloToxin, Button } from '@/components';

const Home = () => {
  return (
    <>
      <HelloToxin />
      <Button text="test" theme="outlined" type="button" />
      <Button text="test" theme="default" link="/change-me" />
      <Button text="test" theme="link" link="/change-me" />
      <Button text="test" theme="long" type="button" />
    </>
  );
};

export default Home;
