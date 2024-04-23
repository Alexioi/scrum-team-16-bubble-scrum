type Timestamp = {
  seconds: number;
  nanoseconds: number;
};

type Comment = {
  id: string;
  userUid: string;
  roomId: string;
  content: string;
  likes: string[];
  date: Timestamp;
};

export type { Comment, Timestamp };
