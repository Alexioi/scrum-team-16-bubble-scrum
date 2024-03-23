'use client';

import { Calendar, Button } from '@/components';

const Home = () => {
  return (
    <>
      <Calendar />
      <Button text="test" theme="link" link="/change-me" />
    </>
  );
};

export default Home;
