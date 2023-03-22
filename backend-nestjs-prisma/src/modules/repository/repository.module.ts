import { Module } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserRepository } from './User/UserRepository';

@Module({
  providers: [UserRepository, PrismaService],
  exports: [RepositoryModule, UserRepository],
})
export class RepositoryModule {}
