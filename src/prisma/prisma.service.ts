import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'mongodb://root:rootpassword@localhost:27017/tamashflix?authSource=admin',
        },
      },
    });
  }
}
