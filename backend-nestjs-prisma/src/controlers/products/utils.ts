import { Prisma } from '@prisma/client';

export const defaultProductSelect: Prisma.ProductSelect = {
  id: true,
  name: true,
  price: true,
  owner: {
    select: {
      name: true,
      id: true,
    },
  },
};
