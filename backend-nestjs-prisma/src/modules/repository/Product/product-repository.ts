import { Injectable } from '@nestjs/common';
import { OmitType } from '@nestjs/mapped-types';
import { Prisma } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime';
import { CreateProductInput } from 'src/controlers/products/dto/create-product.dto';

interface PrimaryInfo {
  id: string;
  name: string;
}

export class ProductOutputData {
  id: string;
  name: string;
  price: Decimal;
  owner: PrimaryInfo;
  category: PrimaryInfo[];
  created_at: Date;
}

export class ProductInputData {
  name: string;
  ownerId: string;
  price: number;
  category: string;
}

export class ProductUpdateData extends OmitType(ProductInputData, [
  'ownerId',
]) {}

export const defaultProductSelect = {
  id: true,
  name: true,
  price: true,
  created_at: true,
  category: {
    select: {
      name: true,
      id: true,
    },
  },
  owner: {
    select: {
      id: true,
      name: true,
    },
  },
};

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ProductRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(payload: ProductInputData): Promise<ProductOutputData> {
    return await this.prisma.product.create({
      data: {
        name: payload.name,
        price: payload.price,
        owner: {
          connect: {
            id: payload.ownerId,
          },
        },
        category: {
          connectOrCreate: {
            create: {
              name: payload.category,
            },
            where: {
              name: payload.category,
            },
          },
        },
      },
      select: defaultProductSelect,
    });
  }

  async findAll(): Promise<ProductOutputData[]> {
    return await this.prisma.product.findMany({
      select: defaultProductSelect,
    });
  }

  async findOne(id: string) {
    return await this.prisma.product.findUnique({
      where: {
        id,
      },
      select: defaultProductSelect,
    });
  }

  async update(
    id: string,
    data: ProductUpdateData,
  ): Promise<ProductOutputData> {
    return this.prisma.product.update({
      data: {
        name: data.name,
        price: data.price,
        // category: {
        //   connectOrCreate: {
        //     create: {
        //       name: data.category,
        //     },
        //     where: {
        //       name: data.category,
        //     },
        //   },
        // },
      },
      where: {
        id,
      },
      select: defaultProductSelect,
    });
  }

  // async remove(id: string) {
  //   await this.prisma.product.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
