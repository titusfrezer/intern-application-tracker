import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InternApplicationService {
    constructor(private readonly prisma: PrismaService) {}

    createApplication() :boolean{
        return true;
    }
    getApplication(): any{
        return this.prisma.user.findMany();
    }
}
