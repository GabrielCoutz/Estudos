import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import {
  defaultUserSelect,
  UserInputData,
  UserOutputData,
} from 'src/controlers/users/interface/userInterfaces';

import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(data: UserInputData): Promise<UserOutputData> {
    return await this.prisma.user.create({
      data: {
        email: data.email,
        name: data.name,
        password: data.password,
      },
      select: defaultUserSelect,
    });
  }

  async findAll(): Promise<UserOutputData[]> {
    return await this.prisma.user.findMany({
      select: defaultUserSelect,
    });
  }

  async findOne(where: Prisma.UserWhereUniqueInput) {
    return await this.prisma.user.findUnique({
      where,
      select: {
        ...defaultUserSelect,
        password: true,
      },
    });
  }

  async update(
    id: string,
    data: Prisma.UserUpdateInput,
  ): Promise<UserOutputData> {
    return this.prisma.user.update({
      data,
      where: {
        id,
      },
      select: defaultUserSelect,
    });
  }

  async remove(id: string) {
    await this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
