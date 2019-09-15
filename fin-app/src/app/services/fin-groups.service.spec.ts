import { TestBed } from '@angular/core/testing';

import { FinGroupsService } from './fin-groups.service';

describe('FinGroupsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinGroupsService = TestBed.get(FinGroupsService);
    expect(service).toBeTruthy();
  });
});
