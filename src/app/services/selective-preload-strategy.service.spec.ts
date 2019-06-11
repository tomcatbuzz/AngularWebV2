import { TestBed } from '@angular/core/testing';

import { SelectivePreloadStrategyService } from './selective-preload-strategy.service';

describe('SelectivePreloadStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectivePreloadStrategyService = TestBed.get(SelectivePreloadStrategyService);
    expect(service).toBeTruthy();
  });
});
