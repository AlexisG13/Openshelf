import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async createUser(createUserDto: CreateUserDto): Promise<void> {
    const { password, ...userDetails } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    await this.prisma.user.create({
      data: {
        ...userDetails,
        UserAuth: {
          create: { email: userDetails.email, password: hashedPassword },
        },
      },
    });
  }

  async signIn({
    email,
    password,
  }: SignInDto): Promise<{ accessToken: string }> {
    const userCredentials = await this.prisma.userAuth.findUnique({
      where: { email },
    });
    console.log(userCredentials);
    if (!(await bcrypt.compare(password, userCredentials.password))) {
      throw new UnauthorizedException('Wrong credentials');
    }
    const user = await this.prisma.user.findUnique({
      where: { id: userCredentials.userId },
    });
    const payload = { email: user.email };
    const accessToken = await this.jwtService.sign(payload);
    return { accessToken };
  }
}
