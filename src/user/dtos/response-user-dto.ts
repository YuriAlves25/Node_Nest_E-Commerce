import { IsEmail, IsNotEmpty } from "class-validator";

export class  ResponseUserDTO {

    @IsNotEmpty()
    username: String;

    @IsEmail()
    email: string;
}
    