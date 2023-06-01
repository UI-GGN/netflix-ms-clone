import { HttpService } from '@nestjs/axios';
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecaptchaGuard implements CanActivate {
  constructor(private httpService: HttpService, private configService: ConfigService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { body } = context.switchToHttp().getRequest();

    const { data } = await firstValueFrom(
      this.httpService.post(
        `https://www.google.com/recaptcha/api/siteverify?response=${
          body.recaptchaValue
        }&secret=${this.configService.get('RECAPTCHA_SECRET')}`,
      ),
    );

    if (!data.success) {
      throw new ForbiddenException('Invalid ReCAPTCHA value');
    }

    return true;
  }
}
