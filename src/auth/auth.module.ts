import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [HttpModule, JwtModule.register({})],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
