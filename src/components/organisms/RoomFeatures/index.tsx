'use client';

import { FC, useState, useEffect } from 'react';

import { RoomFeature, Typography } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectRoom } from '@/store';
import { getFeaturesByRoomId } from '@/api';

import { title } from './constants';
import style from './style.module.scss';

const RoomFeatures: FC = () => {
  const room = useAppSelector(selectRoom);
  const [features, setFeatures] = useState<
    {
      name: string;
      title: string;
      text: string;
      userUid: string;
      roomId: string;
    }[]
  >([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (room?.id === undefined) {
      return;
    }

    const fetchData = async () => {
      try {
        setError('');
        setIsLoading(true);
        const featuresData = await getFeaturesByRoomId(room.id);

        setFeatures(featuresData);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
          return;
        }
        setError('неизвестная ошибка');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [room]);

  if (isLoading) {
    return 'Загрузка...';
  }

  if (error) {
    return error;
  }

  return (
    <div className={style.about}>
      <Typography tag="h2">{title}</Typography>
      {features.map((item) => (
        <div key={item.name} className={style['feature-wrapper']}>
          <RoomFeature name={item.name} title={item.title} text={item.text} />
        </div>
      ))}
    </div>
  );
};

export { RoomFeatures };
