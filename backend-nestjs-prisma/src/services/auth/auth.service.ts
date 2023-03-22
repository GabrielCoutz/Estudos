import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserRepository } from 'src/modules/repository/User/user-repository';
import { PasswordService } from '../password/password.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly passwordSerice: PasswordService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userRepository.findOne({ email });

    if (!user || !(await this.passwordSerice.compare(password, user.password)))
      return null;

    return { id: user.id };
  }

  async login({ id }: { id: string }) {
    const token = this.jwtService.sign({ sub: id });

    return { token };
  }
}
