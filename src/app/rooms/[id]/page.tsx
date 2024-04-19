'use client';

import { useState } from 'react';

import { LikeButton, BookingCard } from '@/components';

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
      <div style={{ width: '380px', margin: 'auto', padding: '30px' }}>
        <BookingCard />
      </div>
    </>
  );
};

export default RoomPage;
