'use client';

import { HelloToxin, Button } from '@/components';

const Home = () => {
  return (
    <>
      <HelloToxin />
      <Button
        text="test"
        theme="outlined"
        type="button"
        size="default"
        onClick={() => {}}
      />
      <Button
        text="test"
        theme="default"
        type="button"
        size="default"
        onClick={() => {}}
      />
      <Button
        text="test"
        theme="link"
        type="button"
        size="default"
        onClick={() => {}}
      />
      <Button
        text="test"
        theme="long"
        type="button"
        size="default"
        onClick={() => {}}
      />
    </>
  );
};

export default Home;
