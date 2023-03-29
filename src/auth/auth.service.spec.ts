import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import appConfig from '../config/app.config';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  const envVariables = { DATABASE_URL: 'mongodb://user:password@host:port/db' };
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({ load: [() => envVariables, appConfig], isGlobal: true }),
        JwtModule.register({}),
        PrismaModule,
      ],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
