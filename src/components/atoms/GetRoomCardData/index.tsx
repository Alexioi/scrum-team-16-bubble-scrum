'use client';

import { ReactNode, FC, useEffect } from 'react';

import { useAppDispatch } from '@/hooks';
import { roomActions } from '@/store';
import { getRoomCard } from '@/api';

type Props = {
  children: ReactNode;
  id: string;
};

const GetRoomCardData: FC<Props> = ({ children, id }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(roomActions.changeError(''));
        dispatch(roomActions.changeIsLoading(true));
        const roomCard = await getRoomCard(id);
        dispatch(roomActions.changeData(roomCard));
      } catch (err) {
        if (err instanceof Error) {
          dispatch(roomActions.changeError(err.message));

          return;
        }
        dispatch(roomActions.changeError('неизвестная ошибка'));
      } finally {
        dispatch(roomActions.changeIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch, id]);

  return <div>{children}</div>;
};

export { GetRoomCardData };
