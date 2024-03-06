import { Module } from '@nestjs/common';
import { InternApplicationService } from './intern-application.service';
import { InternApplicationController } from './intern-application.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InternApplicationController],
  providers: [InternApplicationService],
})
export class InternApplicationModule {}
