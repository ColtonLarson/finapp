import { Test, TestingModule } from '@nestjs/testing';
import { FinGroupsController } from './fin-groups.controller';

describe('FinGroups Controller', () => {
  let controller: FinGroupsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FinGroupsController],
    }).compile();

    controller = module.get<FinGroupsController>(FinGroupsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
