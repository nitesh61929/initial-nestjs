import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredntialsDto: AuthCredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authCredntialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredntialsDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredntialsDto);
  }
}
