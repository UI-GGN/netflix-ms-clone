import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello() {
    return {
      appName: this.configService.get('app.name'),
      appCode: this.configService.get('APP_CODE'),
      message: 'Hello World!',
    };
  }
}
