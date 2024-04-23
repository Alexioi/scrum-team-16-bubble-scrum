import { Typography } from '@/components';
import { useAppSelector } from '@/hooks';
import { selectRoom } from '@/store';

import { title, rules } from './data';
import style from './style.module.scss';

const RoomRules = () => {
  const room = useAppSelector(selectRoom);

  if (room === null) {
    return null;
  }

  return (
    <div className={style.rules}>
      <div className={style.title}>
        <Typography tag="h2">{title}</Typography>
      </div>
      <ul className={style.list}>
        {rules.map((item) => {
          return item.trigger === null || !room.rules[item.trigger] ? (
            <li className={style.item} key={item.data}>
              <span className={style.text}>{item.data}</span>
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export { RoomRules };
