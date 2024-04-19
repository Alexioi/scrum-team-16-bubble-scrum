import { Comment } from '@/types';

const commentsData: Comment[] = [
  {
    id: '1',
    content:
      'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    date: new Date(2024, 3, 18, 2, 32, 2).toString(),
    likes: ['none', 'none', 'none', 'none'],
    roomId: 'none',
    userUid: 'none',
  },
  {
    id: '2',
    content:
      'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент.',
    date: new Date(2024, 3, 16, 2, 32, 2).toString(),
    likes: ['none', 'none'],
    roomId: 'none',
    userUid: 'none',
  },
  {
    id: '3',
    content:
      'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    date: new Date(2024, 3, 18, 2, 32, 2).toString(),
    likes: [
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
    ],
    roomId: 'none',
    userUid: 'none',
  },
  {
    id: '4',
    content:
      'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент.',
    date: new Date(2024, 3, 13, 2, 32, 2).toString(),
    likes: ['none', 'none', 'none'],
    roomId: 'none',
    userUid: 'none',
  },
  {
    id: '5',
    content:
      'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
    date: new Date(2024, 3, 1, 11, 32, 2).toString(),
    likes: ['none', 'none', 'none', 'none', 'none', 'none', 'none', 'none'],
    roomId: 'none',
    userUid: 'none',
  },
  {
    id: '6',
    content:
      'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент.',
    date: new Date(2024, 2, 18, 11, 32, 2).toString(),
    likes: [
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
      'none',
    ],
    roomId: 'none',
    userUid: 'none',
  },
];

export { commentsData };
