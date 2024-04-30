'use client';

import { useState, FC } from 'react';

import {
  LikeButton,
  BookingCard,
  RoomRules,
  GetRoomCardData,
  ImageGallery,
  Impressions,
} from '@/components';

type Props = { params: { id: string } };

const RoomPage: FC<Props> = ({ params }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <GetRoomCardData id={params.id}>
      <ImageGallery />
      <div style={{ width: '380px', margin: 'auto' }}>
        <LikeButton
          countLikes={isLiked ? 23 : 22}
          active={isLiked}
          onClick={() => {
            setIsLiked(!isLiked);
          }}
        />
        <RoomRules />
        <Impressions />

        <BookingCard />
      </div>
    </GetRoomCardData>
  );
};

export default RoomPage;
