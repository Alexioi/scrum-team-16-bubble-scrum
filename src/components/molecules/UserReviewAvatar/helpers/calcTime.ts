import { getDeclension } from './declensions';

const calcDate = (date: string) => {
  const diffTime = new Date().getTime() - new Date(date).getTime();

  const seconds = diffTime / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;
  const weeks = days / 7;
  const months = weeks / 4;
  const years = months / 12;

  if (seconds < 60) {
    return getDeclension(Math.round(seconds), 'секунда', 'секунды', 'секунд');
  }

  if (minutes < 60) {
    return getDeclension(Math.round(minutes), 'минута', 'минуты', 'минут');
  }

  if (hours < 24) {
    return getDeclension(Math.round(hours), 'час', 'часа', 'часов');
  }

  if (days < 7) {
    return getDeclension(Math.round(days), 'день', 'дня', 'дней');
  }

  if (weeks < 4) {
    return getDeclension(Math.round(weeks), 'неделя', 'недели', 'недель');
  }

  if (months < 12) {
    return getDeclension(Math.round(months), 'месяц', 'месяца', 'месяцев');
  }

  return getDeclension(Math.round(years), 'год', 'года', 'лет');
};

export { calcDate };
