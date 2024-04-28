import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
    @IsNotEmpty({ message: "O email precisa de ser definido" })
    @IsString()
    email: string;
    @IsNotEmpty({ message: "A senha precisa de ser definida" })
    @IsString()
    password: string;
}