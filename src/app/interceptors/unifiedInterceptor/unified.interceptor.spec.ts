import { TestBed } from '@angular/core/testing';

import { UnifiedInterceptor } from './unified.interceptor';

describe('UnifiedInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      UnifiedInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: UnifiedInterceptor = TestBed.inject(UnifiedInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
