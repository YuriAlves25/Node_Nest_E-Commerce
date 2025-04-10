import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './DataBase/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private prisma: PrismaService) {}

  @Get()
  async getHello() {
    const user = await this.prisma.user.create({
      data: {
        username: 'yuri',
        email: 'yur1@hotmail.com',
        password: '12345',
      }
    })
  return user}
}
