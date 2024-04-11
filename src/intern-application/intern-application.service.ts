import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';

import { Application } from '.prisma/client';
import { applicationDto, ICreatePost } from './dto/application-dto';

@Injectable()
export class InternApplicationService {
    constructor(private readonly prisma: PrismaService) { }

    async createApplication(data: ICreatePost) {
        try {
            const application = await this.prisma.application.create({
                data: {
                    applying_for: data.applying_for,
                    message: data.message,
                    applicant: {
                        "connect": {
                            "id": data.applicant
                        }
                    }
                }
            });
            if (application) {
                return application;
            }
        } catch (error) {
            return error;
        }
    }
    getApplication(): Promise<ICreatePost[]> {
        return this.prisma.application.findMany();
    }

    getApplicationDetail(id) {
        try {
            return this.prisma.application.findUnique({
                where: {
                    id: id
                }
            })
        } catch (error) {
            return error;
        }
    }

}
