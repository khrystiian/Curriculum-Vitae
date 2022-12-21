import { TestBed } from '@angular/core/testing';

import { TechnicalSkillsService } from './technical-skills.service';

describe('TechnicalSkillsService', () => {
  let service: TechnicalSkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicalSkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
