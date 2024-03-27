const declensionReview = (count: number): string => {
  if (count % 10 === 1) return ' Отзыв';
  if (count % 10 === 0 || count % 10 >= 5) return ' Отзывов';
  return ' Отзыва';
};

export { declensionReview };
