import { getPlural } from '@/helpers';
import { Timestamp } from '@/types';

const calcDate = (date: Timestamp) => {
  const diffTime =
    new Date().getTime() - new Date(date.seconds * 1000).getTime();

  const seconds = diffTime / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = weeks / 4;
  const years = months / 12;

  if (seconds < 60) {
    return `${Math.round(seconds)} ${getPlural([' секунда', ' секунды', ' секунд'], Math.round(seconds))} назад`;
  }

  if (minutes < 60) {
    return `${Math.round(minutes)} ${getPlural([' минута', ' минуты', ' минут'], Math.round(minutes))} назад`;
  }

  if (hours < 24) {
    return `${Math.round(hours)} ${getPlural([' час', ' часа', ' часов'], Math.round(hours))} назад`;
  }

  if (days < 7) {
    return `${Math.round(days)} ${getPlural([' день', ' дня', ' дней'], Math.round(days))} назад`;
  }

  if (weeks < 4) {
    return `${Math.round(weeks)} ${getPlural([' неделя', ' недели', ' недель'], Math.round(weeks))} назад`;
  }

  if (months < 12) {
    return `${Math.round(months)} ${getPlural([' месяц', ' месяца', ' месяцев'], Math.round(months))} назад`;
  }

  return `${Math.round(years)} ${getPlural([' год', ' года', ' лет'], Math.round(years))} назад`;
};

export { calcDate };
