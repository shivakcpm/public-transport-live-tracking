import { TestBed } from '@angular/core/testing';

import { StopslistService } from './stopslist.service';

describe('StopslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StopslistService = TestBed.get(StopslistService);
    expect(service).toBeTruthy();
  });
});
