import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InternApplicationController } from './intern-application/intern-application.controller';
import { InternApplicationService } from './intern-application/intern-application.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, InternApplicationController],
  providers: [AppService, InternApplicationService],
})
export class AppModule {}
