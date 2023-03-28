import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import appConfig from '../config/app.config';
import { PrismaModule } from '../prisma/prisma.module';

describe('AuthService', () => {
  const envVariables = { APP_CODE: 'TMSF' };
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ load: [() => envVariables, appConfig] }), JwtModule.register({}), PrismaModule],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
