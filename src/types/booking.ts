import z from 'zod';

import { bookingScheme } from '@/schemes';

type Booking = z.input<typeof bookingScheme>;

export type { Booking };
