import { TestBed } from '@angular/core/testing';

import { CrudApisService } from './crud-apis.service';

describe('CrudApisService', () => {
  let service: CrudApisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudApisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
