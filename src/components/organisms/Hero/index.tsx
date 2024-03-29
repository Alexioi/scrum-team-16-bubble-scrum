'use client';

import { AutoSlider, Button, Container, Typography } from '@/components/atoms';
import { Dropdown } from '@/components/molecules';

import style from './style.module.scss';
import { guestGroups, guestItems, guestVariants, images } from './data';
import { Calendar } from '../Calendar';

const Hero = () => {
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
            <Calendar />
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
              items={guestItems}
            />
          </div>

          <div className={style['button-wrapper']}>
            <Button text="Подобрать номер" theme="long" onClick={() => {}} />
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
