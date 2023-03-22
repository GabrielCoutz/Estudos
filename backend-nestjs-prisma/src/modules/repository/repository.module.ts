import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ProductRepository } from './Product/product-repository';
import { UserRepository } from './User/user-repository';

@Module({
  providers: [UserRepository, PrismaService, ProductRepository],
  exports: [RepositoryModule, UserRepository, ProductRepository],
})
export class RepositoryModule {}
