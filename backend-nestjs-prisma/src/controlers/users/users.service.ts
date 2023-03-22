import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { UserRepository } from 'src/modules/repository/User/UserRepository';
import { PasswordService } from 'src/services/password/password.service';
import { CreateUserDto } from './dto/create-user.dto';
import {
  ChangePasswordPayload,
  UserUpdateData,
} from './interface/userInterfaces';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordSerice: PasswordService,
  ) {}

  async create({ email, name, password }: CreateUserDto) {
    const user = await this.userRepository.findOne({ email });

    if (user) throw new ConflictException('Email already in use');

    const passwordHash = await this.passwordSerice.hash(password);
    await this.userRepository.create({
      email,
      name,
      password: passwordHash,
    });
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findById(id: string) {
    const user = await this.userRepository.findOne({ id });
    if (!user) throw new NotFoundException('User not found');

    delete user.password;

    return user;
  }

  async update(id: string, data: Partial<UserUpdateData>) {
    const user = await this.userRepository.findOne({ id });
    if (!user) throw new NotFoundException('User not found');

    const updateUserDto = {
      name: data.name,
      email: data.email,
      password: undefined,
    };

    if (data.passwords) {
      const newPasswordHash = await this.changePasswordHandle(
        data.passwords,
        user.password,
      );
      updateUserDto.password = newPasswordHash;
    }

    const updatedUser = await this.userRepository.update(id, updateUserDto);

    return updatedUser;
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ id });

    if (!user) throw new NotFoundException('User not found');

    await this.userRepository.remove(id);
  }

  private async changePasswordHandle(
    passwords: ChangePasswordPayload,
    currentPassword: string,
  ) {
    const passwordsMatch = await this.passwordSerice.compare(
      passwords.oldPassword,
      currentPassword,
    );

    if (!passwordsMatch)
      throw new UnauthorizedException('Credentials does not match');

    const newPasswordHash = await this.passwordSerice.hash(currentPassword);
    return newPasswordHash;
  }
}
