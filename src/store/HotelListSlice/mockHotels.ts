import { Hotel } from "@/components/organisms/HotelCard";
import img from "@/assets/hotel/image.jpg";
export const mockHotels: Hotel[] = [
    {
        id: 0,
        images: [img.src, img.src, img.src, img.src],
        isLuxury: true,
        number: "567",
        price: 9100,
        rating: 3,
    },
    {
        id: 2,
        images: [img.src, img.src, img.src, img.src],
        isLuxury: true,
        number: "124",
        price: 19100,
        rating: 1,
    },
    {
        id: 3,
        images: [img.src, img.src, img.src, img.src],
        isLuxury: false,
        number: "21",
        price: 910,
        rating: 2,
    },
    {
        id: 4,
        images: [img.src, img.src, img.src, img.src],
        isLuxury: false,
        number: "1",
        price: 2700,
        rating: 0,
    },
    {
        id: 5,
        images: [img.src, img.src, img.src, img.src],
        isLuxury: false,
        number: "1234",
        price: 5500,
        rating: 4,
    },
    {
        id: 6,
        images: [img.src, img.src, img.src, img.src],
        isLuxury: false,
        number: "123",
        price: 5500,
        rating: 5,
    },
]