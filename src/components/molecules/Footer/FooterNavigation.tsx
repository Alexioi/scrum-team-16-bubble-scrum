import Link from 'next/link';

import style from './style.module.scss';

const FooterNavigation = () => {
  return (
    <nav className={style.up__nav}>
      <div>
        <div className={style.up__title}>Навигация</div>
        <ul className={style.up__list}>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              О нас
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Новости
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Служба поддержки
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Услуги
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.up__about}>
        <div className={style.up__title}>о нас</div>
        <ul className={style.up__list}>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              О сервисе
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Наша команда
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Вакансии
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Инвесторы
            </Link>
          </li>
        </ul>
      </div>
      <div className={style.up__support}>
        <div className={style.up__title}>Служба поддержки</div>
        <ul className={style.up__list}>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Соглашения
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Сообщества
            </Link>
          </li>
          <li className={style.up__item}>
            <Link className={style.up__link} href="/#">
              Связь с нами
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { FooterNavigation };
