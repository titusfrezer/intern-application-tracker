import { Injectable } from '@nestjs/common';

@Injectable()
export class InternApplicationService {
    createApplication() :boolean{
        return true;
    }
    getApplication(): boolean{
        return false;
    }
}
