'use client';

import { useState, FC } from 'react';

import {
  LikeButton,
  RoomFeatures,
  BookingCard,
  GetRoomCardData,
} from '@/components';

type Props = { params: { id: string } };

const RoomPage: FC<Props> = ({ params }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <GetRoomCardData id={params.id}>
      <LikeButton
        countLikes={isLiked ? 23 : 22}
        active={isLiked}
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      />
      <RoomFeatures />

      <div style={{ width: '380px', margin: 'auto' }}>
        <BookingCard />
      </div>
    </GetRoomCardData>
  );
};

export default RoomPage;
