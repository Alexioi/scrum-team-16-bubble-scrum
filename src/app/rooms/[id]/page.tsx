import { UserCommentInfo } from '@/components';

import muradImage from '@/images/content/murad.jpg';

const RoomPage = () => {
  return (
    <div>
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 3, 18, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 3, 18, 2, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />

      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 3, 16, 2, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 3, 13, 2, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />

      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 3, 11, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 3, 1, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 2, 27, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />

      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 2, 18, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2024, 1, 18, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2023, 7, 18, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2022, 3, 18, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
      <UserCommentInfo
        name="Мурад Сарафанов"
        date={new Date(2019, 3, 18, 11, 32, 2).toString()}
        avatarUrl={muradImage.src}
      />
    </div>
  );
};

export default RoomPage;
