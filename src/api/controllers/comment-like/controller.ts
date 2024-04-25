import { doc, updateDoc } from 'firebase/firestore';

import { db } from '@/api/initFirebase';
import { Comment } from '@/types';
import { changeStringInArray } from '@/helpers';

const likeComment = async (comment: Comment, uid: string) => {
  const docRef = doc(db, 'room-comments', comment.id);

  await updateDoc(docRef, {
    ...comment,
    likes: changeStringInArray(comment.likes, uid),
  });
};

export { likeComment };
