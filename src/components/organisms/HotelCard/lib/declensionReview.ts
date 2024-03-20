export const declensionReview = (count: number): string => {
    if (count % 10 === 1) return 'отзыв';
    if (count % 10 === 0 || count % 10 >= 5 ) return "отзывов";
    return "отзыва"
}