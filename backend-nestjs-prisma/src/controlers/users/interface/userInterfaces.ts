import { OmitType } from '@nestjs/mapped-types';
import { User } from 'src/domain/entities/User';

export const defaultUserSelect = {
  id: true,
  email: true,
  name: true,
  created_at: true,
};

export class UserInputData extends User {}
export type UserOutputData = Omit<
  Record<keyof typeof defaultUserSelect, string>,
  'created_at'
> & {
  created_at: Date;
};

export class ChangePasswordPayload {
  oldPassword: string;
  newPassword: string;
}
export class UserUpdateData extends OmitType(UserInputData, ['password']) {
  passwords: ChangePasswordPayload;
}
