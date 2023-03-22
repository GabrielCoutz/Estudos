import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { defaultProductSelect } from './utils';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create({ name, ownerId, price }: CreateProductDto) {
    const ownerExists = await this.prisma.user.count({
      where: {
        id: ownerId,
      },
    });

    if (!ownerExists)
      throw new HttpException('Owner not found', HttpStatus.NOT_FOUND);

    const product = await this.prisma.product.create({
      data: {
        name,
        price,
        owner: {
          connect: {
            id: ownerId,
          },
        },
      },
      select: {
        id: true,
        name: true,
        created_at: true,
      },
    });

    return product;
  }

  async findAll() {
    const products = await this.prisma.product.findMany({
      select: defaultProductSelect,
    });

    return products;
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: {
        id,
      },
      select: defaultProductSelect,
    });

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    return product;
  }

  async update(id: string, { name, price }: UpdateProductDto) {
    const product = await this.prisma.product.update({
      data: {
        name,
        price,
      },
      where: {
        id,
      },
      select: defaultProductSelect,
    });

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    return product;
  }

  async remove(id: string) {
    const product = await this.prisma.product.count({
      where: { id },
    });

    if (!product)
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

    await this.prisma.product.delete({
      where: { id },
    });
  }
}
