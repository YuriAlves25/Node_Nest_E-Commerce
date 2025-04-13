import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/DataBase/prisma.service';
import { ResponseUserDTO } from './dtos/response-user-dto';
import { CreateUserDTO } from './dtos/create-user-dto';



@Injectable()
export class UserService {
    constructor(private prisma: PrismaService){}

    
   async createUser(user: CreateUserDTO): Promise<ResponseUserDTO> {
  try {
    const createdUser = await this.prisma.user.create({ data: user })

    return {
      username: createdUser.username, 
      email: createdUser.email,
      
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
     
}
