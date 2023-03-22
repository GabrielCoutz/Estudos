import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductRepository } from 'src/modules/repository/Product/product-repository';
import { CreateProductInput } from './dto/create-product.dto';
import { UpdateProductInput } from './dto/update-product.dto';
import { defaultProductSelect } from './utils';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(userId: string, payload: CreateProductInput) {
    const createProductDto = {
      name: payload.name,
      ownerId: userId,
      price: payload.price,
      category: payload.category,
    };
    const product = await this.productRepository.create(createProductDto);

    return product;
  }

  async findAll() {
    const products = await this.productRepository.findAll();

    return products;
  }

  async findOne(id: string) {
    const product = await this.productRepository.findOne(id);

    if (!product) throw new NotFoundException('Product not found');

    return product;
  }

  async update(
    id: string,
    { name, price, category }: Partial<UpdateProductInput>,
  ) {
    const updateProductDto = {
      category,
      name,
      price,
    };

    const product = await this.productRepository.update(id, updateProductDto);

    return product;
  }

  // async remove(id: string) {
  //   const product = await this.prisma.product.count({
  //     where: { id },
  //   });

  //   if (!product)
  //     throw new HttpException('Product not found', HttpStatus.NOT_FOUND);

  //   await this.prisma.product.delete({
  //     where: { id },
  //   });
  // }
}
