import { TestBed, inject } from '@angular/core/testing';

import { MsalService } from './msal.service';

describe('MsalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsalService]
    });
  });

  it('should be created', inject([MsalService], (service: MsalService) => {
    expect(service).toBeTruthy();
  }));
});
