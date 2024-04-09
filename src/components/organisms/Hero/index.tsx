'use client';

import Link from 'next/link';

import { AutoSlider, Button, Container, Typography } from '@/components/atoms';
import { Dropdown, Calendar } from '@/components/organisms';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { actions } from '@/store';

import style from './style.module.scss';
import { guestGroups, guestItems, guestVariants, images } from './data';

const Hero = () => {
  const dispatch = useAppDispatch();
  const { guestsData } = useAppSelector((state) => state.filter);

  const handleDateCalendarChange = (value: string[] | null[]) => {
    dispatch(actions.filter.changeDates(value));
  };

  const handleGeustDropdownChange = (
    value: { name: string; counter: number }[],
  ) => {
    dispatch(actions.filter.changeGuestData(value));
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
              groups={guestGroups}
              variants={guestVariants}
              items={guestsData.items || guestItems}
              onChange={handleGeustDropdownChange}
            />
          </div>

          <div className={style['button-wrapper']}>
            <Link href="/search-room">
              <Button text="Подобрать номер" theme="long" onClick={() => {}} />
            </Link>
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
