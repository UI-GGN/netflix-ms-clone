import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(authDto: AuthDto) {
    const hash = bcrypt.hashSync(authDto.email + authDto.password, +this.configService.get('HASHING_ROUNDS') || 10);
    try {
      const user = await this.prismaService.user.create({
        data: {
          email: authDto.email,
          hash: hash,
        },
      });
      return { access_token: await this.getSignedToken(user.email) };
    } catch (error) {
      if (error.code === 'P2002') {
        throw new ForbiddenException('Email already exist.');
      }
      throw error;
    }
  }

  async signin(authDto: AuthDto) {
    const user = await this.prismaService.user.findUnique({
      where: {
        email: authDto.email,
      },
    });

    if (!user || !bcrypt.compareSync(authDto.email + authDto.password, user.hash))
      throw new ForbiddenException('email or password is incorrect');

    return { access_token: await this.getSignedToken(user.email) };
  }

  private getSignedToken(email: string): Promise<string> {
    const payload = {
      email,
    };
    return this.jwtService.signAsync(payload, { expiresIn: '60m', secret: this.configService.get('JWT_SECRET') });
  }
}
