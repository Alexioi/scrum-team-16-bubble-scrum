'use client';

import { useRouter } from 'next/navigation';

import { AutoSlider, Button, Container, Typography } from '@/components/atoms';
import { Dropdown, Calendar } from '@/components/organisms';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { filterActions, selectGuests } from '@/store';

import style from './style.module.scss';
import { guestVariants, images } from './data';

const Hero = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { items, groups } = useAppSelector(selectGuests);

  const handleDateCalendarChange = (value: string[] | null[]) => {
    dispatch(filterActions.changeDates(value));
  };

  const handleGuestDropdownChange = (
    value: { name: string; counter: number }[],
  ) => {
    dispatch(filterActions.changeGuestData(value));
  };

  return (
    <div className={style.hero}>
      <Container>
        <div className={style['search-wrapper']}>
          <Typography tag="h1">Найдём номера под ваши пожелания</Typography>

          <div className={style['calendar-wrapper']}>
            <div className={style.titles}>
              <Typography tag="h3">Прибытие</Typography>
              <Typography tag="h3">Выезд</Typography>
            </div>
            <Calendar onChange={handleDateCalendarChange} />
          </div>

          <div className={style['guest-wrapper']}>
            <div className={style.title}>
              <Typography tag="h3">Гости</Typography>
            </div>
            <Dropdown
              hasButtons
              placeholder="Сколько гостей"
              groups={groups}
              variants={guestVariants}
              items={items}
              onChange={handleGuestDropdownChange}
            />
          </div>

          <div className={style['button-wrapper']}>
            <Button
              text="Подобрать номер"
              theme="long"
              onClick={() => router.push('/search-room')}
            />
          </div>
        </div>
      </Container>
      <div className={style.desc}>
        <Container>
          <div className={style.text}>
            Лучшие номера для вашей работы, отдыха и просто вдохновения
          </div>
        </Container>
      </div>
      <AutoSlider imagesURLs={images} />
    </div>
  );
};

export { Hero };
