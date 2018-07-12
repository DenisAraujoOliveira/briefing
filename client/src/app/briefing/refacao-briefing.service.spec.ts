import { TestBed, inject } from '@angular/core/testing';

import { RefacaoBriefingService } from './refacao-briefing.service';

describe('RefacaoBriefingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefacaoBriefingService]
    });
  });

  it('should be created', inject([RefacaoBriefingService], (service: RefacaoBriefingService) => {
    expect(service).toBeTruthy();
  }));
});
