import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return await this.prismaService.movie.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.movie.findFirst({ where: { id } });
  }
}
