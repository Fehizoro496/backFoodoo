/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {}
