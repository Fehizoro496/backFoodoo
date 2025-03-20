import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipesController } from './recipes/recipes.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RecipesService } from './recipes/recipes.service';
import { AuthController } from './auth/auth.controller';
// import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:join(__dirname,'..','public'),
      serveRoot:'/images'
    }),
    AuthModule,
    UsersModule
  ],
  controllers: [AppController, RecipesController, AuthController],
  providers: [AppService, RecipesService],
})
export class AppModule {}
