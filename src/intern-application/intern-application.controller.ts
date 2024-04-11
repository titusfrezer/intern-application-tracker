import { Controller,Get,Post,Body, UsePipes, Param } from '@nestjs/common';


import { User,Application, Prisma } from '@prisma/client';
import { InternApplicationService } from './intern-application.service';
import { applicationDto, applicationSchema } from './dto/application-dto';
import { ZodValidationPipe } from 'nestjs-zod';

@Controller('intern-application')
export class InternApplicationController {
    constructor(private readonly internApplicationService:InternApplicationService){}
    @Get()
    getApplication() {
        return this.internApplicationService.getApplication();
    }

    @Post()
    async createApplication(@Body() data:applicationDto): Promise<Application> {
        return this.internApplicationService.createApplication(data);
    }

    @Get(':id')
    getApplicationDetail(@Param('id') id:any){
        return this.internApplicationService.getApplicationDetail(parseInt(id));
    }
}
