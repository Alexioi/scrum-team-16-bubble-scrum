type Hotel = {
  id: string;
  roomNumber: number;
  price: number;
  averageRating: number;
  isLux: boolean;
  imageNames: string[];
  reviews: number;
  startDate: string;
  endDate: string;
  guestCount: number;
  babyCount: number;
  bedRoomCount: number;
  bedCount: number;
  bathroomCount: number;
  availability: {
    isWideCorridor: boolean;
    isAssistant: boolean;
  };
  additionalAmenities: {
    isBreakfast: boolean;
    isDesk: boolean;
    isHighChair: boolean;
    isCrib: boolean;
    isTv: boolean;
    isShampoo: boolean;
  };
  rules: {
    isSmoke: boolean;
    isAnimals: boolean;
    isLotOfGuests: boolean;
  };
  discount: number;
  additionalServices: number;
};

export type { Hotel };
