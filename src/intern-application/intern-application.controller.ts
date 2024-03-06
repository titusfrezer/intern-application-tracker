import { Controller,Get } from '@nestjs/common';

import {InternApplicationService} from './intern-application.service';
@Controller('intern-application')
export class InternApplicationController {
    constructor(private readonly internApplicationService:InternApplicationService){}

    @Get()
    getApplication() {
        return this.internApplicationService.getApplication();
    }
}
