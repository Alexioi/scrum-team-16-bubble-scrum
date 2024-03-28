import { Hotel } from '@/components';
import img1 from '@/images/content/room-image-1.jpg';
import img2 from '@/images/content/room-image-2.jpg';
import img3 from '@/images/content/room-image-3.jpg';
import img4 from '@/images/content/room-image-4.jpg';

export const mockHotels: Hotel[] = [
  {
    id: 0,
    images: [img1.src, img2.src, img3.src, img4.src],
    isLuxury: true,
    number: '888',
    price: 9990,
    rating: 5,
  },
  {
    id: 2,
    images: [img1.src, img2.src, img3.src, img4.src],
    isLuxury: true,
    number: '124',
    price: 19100,
    rating: 1,
  },
  {
    id: 3,
    images: [img1.src, img2.src, img3.src, img4.src],
    isLuxury: false,
    number: '21',
    price: 910,
    rating: 2,
  },
  {
    id: 4,
    images: [img1.src, img2.src, img3.src, img4.src],
    isLuxury: false,
    number: '1',
    price: 2700,
    rating: 0,
  },
  {
    id: 5,
    images: [img1.src, img2.src, img3.src, img4.src],
    isLuxury: false,
    number: '1234',
    price: 5500,
    rating: 4,
  },
  {
    id: 6,
    images: [img1.src, img2.src, img3.src, img4.src],
    isLuxury: false,
    number: '123',
    price: 5500,
    rating: 5,
  },
];
