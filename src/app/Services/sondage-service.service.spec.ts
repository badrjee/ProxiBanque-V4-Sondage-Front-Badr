import { TestBed, inject } from '@angular/core/testing';

import { SondageServiceService } from './sondage-service.service';

describe('SondageServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SondageServiceService]
    });
  });

  it('should be created', inject([SondageServiceService], (service: SondageServiceService) => {
    expect(service).toBeTruthy();
  }));
});
