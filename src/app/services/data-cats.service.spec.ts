import { TestBed } from '@angular/core/testing';

import { DataCatsService } from './data-cats.service';

describe('DataCatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataCatsService = TestBed.get(DataCatsService);
    expect(service).toBeTruthy();
  });
});
