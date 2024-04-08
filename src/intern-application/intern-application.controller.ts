import { Controller,Get,Post,Body } from '@nestjs/common';

import {InternApplicationService} from './intern-application.service';

import { User,Application, Prisma } from '@prisma/client';

@Controller('intern-application')
export class InternApplicationController {
    constructor(private readonly internApplicationService:InternApplicationService){}
    @Get()
    getApplication() {
        return this.internApplicationService.getApplication();
    }

    @Post()
    async createApplication(@Body() data:any): Promise<Application> {
        return this.internApplicationService.createApplication(data);
    }
}
