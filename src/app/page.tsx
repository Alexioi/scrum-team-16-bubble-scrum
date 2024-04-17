'use client';

import { useState } from 'react';

import { Hero, LikeButton } from '@/components';

const Home = () => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <>
      <LikeButton
        countLikes={isLiked ? 23 : 22}
        active={isLiked}
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      />
      <Hero />
    </>
  );
};

export default Home;
