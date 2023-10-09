import { TestBed } from '@angular/core/testing';

import { HeadereditInterceptor } from './headeredit.interceptor';

describe('HeadereditInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HeadereditInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HeadereditInterceptor = TestBed.inject(HeadereditInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
