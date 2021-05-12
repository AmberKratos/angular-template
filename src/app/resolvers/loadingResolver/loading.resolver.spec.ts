import { TestBed } from '@angular/core/testing';

import { LoadingResolver } from './loading.resolver';

describe('LoadingResolver', () => {
  let resolver: LoadingResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(LoadingResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
