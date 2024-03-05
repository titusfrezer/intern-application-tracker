import { Test, TestingModule } from '@nestjs/testing';
import { InternApplicationController } from './intern-application.controller';

describe('InternApplicationController', () => {
  let controller: InternApplicationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InternApplicationController],
    }).compile();

    controller = module.get<InternApplicationController>(InternApplicationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
