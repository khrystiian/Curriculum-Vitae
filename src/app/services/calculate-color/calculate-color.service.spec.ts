import { TestBed } from '@angular/core/testing';

import { CalculateColorService } from './calculate-color.service';

describe('CalculateColorService', () => {
  let service: CalculateColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
