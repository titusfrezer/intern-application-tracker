import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternApplicationController } from './intern-application/intern-application.controller';
import { InternApplicationService } from './intern-application/intern-application.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { InternApplicationModule } from './intern-application/intern-application.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, InternApplicationModule, AuthModule, UsersModule],
  controllers: [AppController, InternApplicationController],
  providers: [AppService, InternApplicationService],
})
export class AppModule {}
