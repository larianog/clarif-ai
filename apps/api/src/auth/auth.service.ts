import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserService } from 'src/user/user.service';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService) {}

    async registerUser(createUserDto: CreateUserDto) {
        const user = await this.userService.findByUsername(createUserDto.username);
        if (user) throw new ConflictException('User already exists!');
        return this.userService.create(createUserDto);
      }
}
