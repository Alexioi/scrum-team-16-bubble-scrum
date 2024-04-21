'use client';

import { useState } from 'react';

import { LikeButton, RoomFeatures } from '@/components';

const RoomPage = () => {
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
      <RoomFeatures />
    </>
  );
};

export default RoomPage;
