import { Controller, Get, UseGuards, Post, Request } from '@nestjs/common';
// import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/local/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/JWT/jwt-auth.guard';

@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}
  constructor(private authService:AuthService) {}

  @Get()
  getHello(): string {
    // return this.appService.getHello();
    return null
  }

  // @UseGuards(JwtAuthGuard)
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req){
    return this.authService.login(req.user)
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile (@Request() req){
    return req.user
  }

  // @UseGuards(LocalAuthGuard)
  // @Post('auth/logout')
  // async logout(@Request() req){
  //   // console.log(req)
  //   // console.log(req.user)
  //   return req.user
  // }

}
