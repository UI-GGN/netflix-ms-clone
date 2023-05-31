import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './auth/strategy/jwt-strategy';
import configModuleOptions from './config/configuration';
import { MovieModule } from './movie/movie.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    AuthModule,
    PrismaModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({ driver: ApolloDriver, autoSchemaFile: true, sortSchema: true }),
    MovieModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
