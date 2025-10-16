import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { verify } from 'argon2';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async registerUser(createUserDto: CreateUserDto) {
        const user = await this.userService.findByUsername(createUserDto.username);
        if (user) throw new ConflictException('User already exists!');
        return this.userService.create(createUserDto);
      }

    async validateLocalUser(username: string, password: string){
      const user = await this.userService.findByUsername(username);

      if(!user) throw new UnauthorizedException("User not found.");

      const isPasswordMatched = verify(user.password, password);

      if(!isPasswordMatched) throw new UnauthorizedException("Invalid credentials.");

      return { id: user.id, username: username };

    }
}
