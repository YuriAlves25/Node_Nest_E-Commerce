import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dtos/create-user-dto';

@Controller()
export class UserController {
    constructor(private userService: UserService){}

    @Post("signup")
    async createUser(@Body() body: CreateUserDTO) {
        console.log(body)
        
       return this.userService.createUser(body)

    }
}
