'use client';

import { useState, FC } from 'react';

import {
  LikeButton,
  BookingCard,
  GetRoomCardData,
  ImageGallery,
} from '@/components';

type Props = { params: { id: string } };

const RoomPage: FC<Props> = ({ params }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <GetRoomCardData id={params.id}>
      <ImageGallery />
      <LikeButton
        countLikes={isLiked ? 23 : 22}
        active={isLiked}
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      />
      <div style={{ width: '380px', margin: 'auto' }}>
        <BookingCard />
      </div>
    </GetRoomCardData>
  );
};

export default RoomPage;
