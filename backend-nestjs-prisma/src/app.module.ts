import { Module } from '@nestjs/common';
import { UsersModule } from './controlers/users/users.module';
import { ProductsModule } from './controlers/products/products.module';

import { AuthModule } from './modules/auth/auth.module';
import { RepositoryModule } from './modules/repository/repository.module';

@Module({
  imports: [UsersModule, ProductsModule, AuthModule, RepositoryModule],
  providers: [],
})
export class AppModule {}
