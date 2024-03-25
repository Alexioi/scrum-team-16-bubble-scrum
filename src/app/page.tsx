'use client';

import { HelloToxin, Button, ButtonLink } from '@/components';

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
      <ButtonLink text="test" theme="default" size="default" link="change-me" />
      <ButtonLink
        text="test"
        theme="outlined"
        size="default"
        link="/change-me"
      />
    </>
  );
};

export default Home;
