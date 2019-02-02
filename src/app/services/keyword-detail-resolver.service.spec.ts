import { TestBed } from '@angular/core/testing';

import { KeywordDetailResolverService } from './keyword-detail-resolver.service';

describe('KeywordDetailResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeywordDetailResolverService = TestBed.get(KeywordDetailResolverService);
    expect(service).toBeTruthy();
  });
});
