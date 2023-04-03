import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configModuleOptions from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from './prisma/prisma.module';
import { JwtStrategy } from './auth/strategy/jwt-strategy';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(configModuleOptions), AuthModule, PrismaModule, UserModule],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
