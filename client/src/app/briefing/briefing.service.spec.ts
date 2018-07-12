import { TestBed, inject } from '@angular/core/testing';

import { BriefingService } from './briefing.service';

describe('BriefingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BriefingService]
    });
  });

  it('should be created', inject([BriefingService], (service: BriefingService) => {
    expect(service).toBeTruthy();
  }));
});
