import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { SignInDto } from './dtos/sign-in.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    createUser(createUserDto: CreateUserDto): Promise<void>;
    signIn({ email, password, }: SignInDto): Promise<{
        accessToken: string;
    }>;
}
