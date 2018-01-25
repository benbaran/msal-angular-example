import { TestBed, async, inject } from '@angular/core/testing';

import { MsalGuard } from './msal.guard';

describe('MsalGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MsalGuard]
    });
  });

  it('should ...', inject([MsalGuard], (guard: MsalGuard) => {
    expect(guard).toBeTruthy();
  }));
});
