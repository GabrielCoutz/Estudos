import { Injectable } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

@Injectable()
export class PasswordService {
  async hash(password: string): Promise<string> {
    const passwordHash = await bcrypt.hash(password, 12);

    return passwordHash;
  }

  async compare(password: string, passwordHash: string): Promise<boolean> {
    const result = await bcrypt.compare(password, passwordHash);

    return result;
  }
}
