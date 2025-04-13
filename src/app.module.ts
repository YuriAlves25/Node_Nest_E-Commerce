import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './DataBase/prisma.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, UserController],
  providers: [AppService, PrismaService, UserService],
})
export class AppModule {}
