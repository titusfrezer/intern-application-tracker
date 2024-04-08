import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { Application } from '.prisma/client';

@Injectable()
export class InternApplicationService {
    constructor(private readonly prisma: PrismaService) {}

    async createApplication(data:any) :Promise<Application>{
        
        return this.prisma.application.create({ data });

    }
    getApplication(): any{
        return this.prisma.user.findMany();
    }
}
