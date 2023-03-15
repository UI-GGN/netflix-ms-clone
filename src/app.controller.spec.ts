import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import appConfig from './config/app.config';

describe('AppController', () => {
  const envVariables = { APP_CODE: 'TMSF' };
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ load: [() => envVariables, appConfig] })],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toEqual({
        appName: appConfig().app.name,
        appCode: envVariables.APP_CODE,
        message: 'Hello World!',
      });
    });
  });
});
