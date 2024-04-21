'use client';

import { useState } from 'react';

import { LikeButton, RoomRules } from '@/components';
import { rules } from '@/components/organisms/RoomRules/data';

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
      <RoomRules rules={rules} />
    </>
  );
};

export default RoomPage;
