import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/controlers/auth/auth.controller';
import { AuthService } from 'src/services/auth/auth.service';
import { PasswordService } from 'src/services/password/password.service';
import { RepositoryModule } from '../repository/repository.module';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';

@Module({
  imports: [
    RepositoryModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy, PasswordService],
})
export class AuthModule {}
