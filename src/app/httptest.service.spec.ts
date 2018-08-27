import { TestBed, inject } from '@angular/core/testing';

import { HttptestService } from './httptest.service';

describe('HttptestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttptestService]
    });
  });

  it('should be created', inject([HttptestService], (service: HttptestService) => {
    expect(service).toBeTruthy();
  }));
});
