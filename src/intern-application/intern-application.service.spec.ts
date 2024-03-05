import { Test, TestingModule } from '@nestjs/testing';
import { InternApplicationService } from './intern-application.service';

describe('InternApplicationService', () => {
  let service: InternApplicationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InternApplicationService],
    }).compile();

    service = module.get<InternApplicationService>(InternApplicationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
