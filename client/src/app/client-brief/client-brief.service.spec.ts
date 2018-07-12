import { TestBed, inject } from '@angular/core/testing';

import { ClientBriefService } from './client-brief.service';

describe('ClientBriefService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientBriefService]
    });
  });

  it('should be created', inject([ClientBriefService], (service: ClientBriefService) => {
    expect(service).toBeTruthy();
  }));
});
